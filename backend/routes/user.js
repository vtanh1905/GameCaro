const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const saltRounds = 5;

const User_Model = require('./../model/User_Model');

const router = express.Router();

router.post(
  '/register',
  [
    check('email')
      .isEmail()
      .custom(async email => {
        try {
          const user = await User_Model.getUserByEmail(email);

          if (user !== null) {
            throw new Error('Email đã tồn tại!');
          }
          return email;
        } catch (error) {
          throw new Error(error);
        }
      }),
    check('password')
      .not()
      .isEmpty()
      .isLength({ min: 6, max: 12 }),
    check('fullname')
      .not()
      .isEmpty()
      .isLength({ min: 6, max: 25 })
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
      const token = jwt.sign(user, 'HayTraoChoAnh');
      return res.json({ ...user, token });
    });
  })(req, res);
});

module.exports = router;
