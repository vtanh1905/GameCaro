const mongoose = require('mongoose');

var kittySchema = new mongoose.Schema(
  {
    name: String
  },
  { versionKey: false }
);

module.exports = mongoose.model('Kitten', kittySchema);
