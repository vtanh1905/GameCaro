const passport = require('passport');
const passportJWT = require('passport-jwt');
const bcrypt = require('bcrypt');

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;

const User_Model = require('./../model/User_Model');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async function(email, password, cb) {
      try {
        const user = await User_Model.getUserByEmail(email);

        if (!user) {
          return cb(null, false, { message: 'Incorrect email or password.' });
        }

        const checkPassword = await bcrypt.compare(password, user.password);

        if (!checkPassword) {
          return cb(null, false, { message: 'Incorrect email or password.' });
        }

        return cb(
          null,
          { user: { email: user.email, fullname: user.fullname } },
          { message: 'Logged In Successfully.' }
        );
      } catch (error) {
        return cb(error);
      }
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'HayTraoChoAnh'
    },
    async function(jwt_payload, cb) {
      try {
        const user = await User_Model.getUserByEmail(jwt_payload.user.email);
        return cb(null, { email: user.email, fullname: user.fullname });
      } catch (error) {
        return cb(null, { error: true });
      }
    }
  )
);
