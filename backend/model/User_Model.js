const User = require('./../db/User');

module.exports = {
  getUserByID: id => {
    return User.findById(id);
  },

  getUserByEmail: email => {
    return User.findOne({ email: email });
  },

  getUserByEmailAndPassword: (email, password) => {
    return User.findOne({ email: email, password: password });
  },

  addUser: (email, password, fullname) => {
    User.create({
      email,
      password,
      fullname,
      matches: {
        win: 0,
        lose: 0,
        tie: 0
      },
      avatarURL: ''
    });
  },

  updateUserByEmail: (email, data) => {
    return User.updateOne({ email }, data);
  }
};
