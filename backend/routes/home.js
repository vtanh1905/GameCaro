var express = require('express');
var router = express.Router();
const passport = require('passport');

router.get('/', (req, res, next) => {
  res.render('home');
});

router.get(
  '/me',
  passport.authenticate('jwt', { session: false }),
  (req, res, next) => {
    res.json(req.user);
  }
);

module.exports = router;
