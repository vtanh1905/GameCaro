const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: 'vtanh195-midterm-webnc',
  api_key: '462543337321735',
  api_secret: 'e6u0EjrhzI2zLZrBprOaW1e6zTY'
});

const saltRounds = 5;

const User_Model = require('./../model/User_Model');

const router = express.Router();

router.post(
  '/register',
  [
    check('email', 'Email không hợp lệ')
      .isEmail()
      .custom(async email => {
        try {
          const user = await User_Model.getUserByEmail(email);

          if (user !== null) {
            throw 'Email đã tồn tại!';
          }
          return email;
        } catch (error) {
          throw new Error(error);
        }
      }),
    check('password', 'Password từ 6 đến 12 ký tự')
      .not()
      .isEmpty()
      .isLength({ min: 6, max: 12 }),
    check('fullname', 'Password từ 3 đến 25 ký tự')
      .not()
      .isEmpty()
      .isLength({ min: 3, max: 25 })
      .trim()
  ],
  async (req, res, next) => {
    //Check Validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    try {
      //Hash Password
      const passHashed = await bcrypt.hash(req.body.password, saltRounds);

      //Add User To
      await User_Model.addUser(req.body.email, passHashed, req.body.fullname);
    } catch (error) {
      res.json({ register: false });
    }

    res.json({ register: true });
  }
);

router.post('/login', (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: 'Something is not right',
        user: user
      });
    }
    req.login(user, { session: false }, err => {
      if (err) {
        res.send(err);
      }
      // generate a signed son web token with the contents of user object and return it in the response
      const token = jwt.sign(
        { user: { email: user.user.email } },
        'HayTraoChoAnh'
      );
      return res.json({ ...user, token });
    });
  })(req, res);
});

router.post('/edit', async (req, res, next) => {
  let avatar = null;
  if (req.files) {
    avatar = req.files.file;
  }
  const user = JSON.parse(req.body.user);
  const userDB = await User_Model.getUserByEmail(user.email);

  //Check Password
  const checkPassword = await bcrypt.compare(user.oldPassword, userDB.password);
  if (checkPassword === false) {
    return res.json({ hasErrors: true, msg: 'Mật khẩu không chính xác' });
  }

  let passwordWillChange = userDB.password;

  //Check new Password
  if (
    (user.newPassword.length < 6 || user.newPassword.length > 20) &&
    user.newPassword.length !== 0
  ) {
    return res.json({ hasErrors: true, msg: 'Mật khẩu mới không hợp lệ' });
  } else {
    if (user.newPassword.length !== 0) {
      passwordWillChange = await bcrypt.hash(user.newPassword, saltRounds);
    }
  }

  //Check Full name
  if (user.fullname.length < 3 || user.fullname.length > 25) {
    return res.json({ hasErrors: true, msg: 'Họ tên không hợp lệ' });
  }

  //Check Upload Avatar
  if (avatar !== null) {
    avatar.mv(`public/${avatar.name}`, async err => {
      if (err) {
        return res.status(500).send(err);
      }

      cloudinary.v2.uploader.upload(
        `public/${avatar.name}`,
        async (error, result) => {
          await User_Model.updateUserByEmail(user.email, {
            fullname: user.fullname,
            password: passwordWillChange,
            avatarURL: result.url
          });
          return res.json({ hasErrors: false, msg: 'Thay đổi thành công' });
        }
      );
    });
  } else {
    //Khong co Avatar Mới
    await User_Model.updateUserByEmail(user.email, {
      fullname: user.fullname,
      password: passwordWillChange
    });
    return res.json({ hasErrors: false, msg: 'Thay đổi thành công' });
  }
});

module.exports = router;
