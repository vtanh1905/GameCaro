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
      fullname
    });
  }
};
