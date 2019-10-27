const mongoose = require('mongoose');

var userSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
    fullname: String,
    matches: {
      win: Number,
      lose: Number,
      tie: Number
    },
    avatarURL: String
  },
  { versionKey: false }
);

module.exports = mongoose.model('User', userSchema);
