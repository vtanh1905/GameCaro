const passport = require('passport');
const passportJWT = require('passport-jwt');

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
        const user = await User_Model.getUserByEmailAndPassword(
          email,
          password
        );

        if (!user) {
          return cb(null, false, { message: 'Incorrect email or password.' });
        }

        return cb(null, { user }, { message: 'Logged In Successfully.' });
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
      return cb(null, jwt_payload.user);
    }
  )
);
