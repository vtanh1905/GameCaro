var io = require('socket.io')();

module.exports = app => {
  app.io = io;

  // Thiet lap Socket
  io.on('connection', function(socket) {
    console.log('A user connected');
  });
};
