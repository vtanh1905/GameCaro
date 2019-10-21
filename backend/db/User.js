const mongoose = require('mongoose');

var userSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
    fullname: String
  },
  { versionKey: false }
);

module.exports = mongoose.model('User', userSchema);
