var io = require('socket.io')();
const uuidv4 = require('uuid/v4');

function arrRemoveElement(arr, index) {
  let temp = JSON.parse(JSON.stringify(arr));
  return [...temp.splice(0, index), ...matches.splice(index + 1)];
}

let matches = [];
module.exports = app => {
  app.io = io;

  // Thiet lap Socket
  io.on('connection', function(socket) {
    console.log('A user connected');
    socket.on('CLIENT_SEND_FIND_MATCH', req => {
      const { user } = req;
      const ROOMID = uuidv4();
      /**
      |--------------------------------------------------
      | Xử lý ghép 2 người chơi vào 1 phòng
      |--------------------------------------------------
      */

      if (matches.length === 0) {
        //TH matches rỗng
        user.isHost = true;
        matches.push({ roomID: ROOMID, player: [user] });
        socket.join(ROOMID);
      } else {
        // TH matches không rỗng

        //Tìm xem có matches nào thiếu 1 người hay không
        const indexHasOnePlayer = matches.findIndex(
          item => item.player.length === 1
        );

        if (indexHasOnePlayer === -1) {
          //Khong có matches nao thiếu 1 người cả
          user.isHost = true;
          matches.push({ roomID: ROOMID, player: [user] });
          socket.join(ROOMID);
        } else {
          //Có matches thiếu 1 người
          user.isHost = false;
          matches[indexHasOnePlayer].player.push(user);
          socket.join(matches[indexHasOnePlayer].roomID);

          //Gửi thông tin cho người trong room
          socket
            .to(matches[indexHasOnePlayer].roomID)
            .emit('SERVER_SEND_INFO_COMPETITOR', { user });

          socket.emit('SERVER_SEND_INFO_COMPETITOR', {
            user: matches[indexHasOnePlayer].player[0]
          });
        }
      }

      /**
      |--------------------------------------------------
      | Xử lý TH người chơi hủy tìm kiếm
      |--------------------------------------------------
      */
      socket.on('CLIENT_SEND_CANCEL_FIND_MATCH', req => {
        const { user } = req;

        const indexPlayerInRoom = matches.findIndex(
          item => item.player[0].email === user.email
        );
        matches = arrRemoveElement(matches, indexPlayerInRoom);
      });

      /**
      |--------------------------------------------------
      | Xử lý TH người chơi thoát khỏi phòng
      |--------------------------------------------------
      */
      // socket.on('CLIENT_SEND_EXIT_ROOM', req => {
      //   console.log(req);
      // });

      socket.on('disconnect', () => {
        console.log('A user disconected');
        //Kêu người chơi còn lại thoát
        socket.to(ROOMID).emit('SERVER_SEND_COMPETITOR_EXIT', {});

        const indexRoom = matches.findIndex(item => item.roomID === ROOMID);
        matches = arrRemoveElement(matches, indexRoom);
      });

      /**
      |--------------------------------------------------
      | Xử lý TH 2 ngươi đánh vs nhau
      |--------------------------------------------------
      */
      socket.on('CLIENT_SEND_POSITION_BOARD', req => {
        const { user, i, j } = req;
        const indexPlayerInRoom = matches.findIndex(
          item =>
            item.player[0].email === user.email ||
            item.player[1].email === user.email
        );

        socket
          .to(matches[indexPlayerInRoom].roomID)
          .emit('SERVER_SEND_POSITION_BOARD_COMPETITOR', { i, j });
      });

      /**
      |--------------------------------------------------
      | Các TH Xin Hòa, Xin Thua, Xin Undo
      |--------------------------------------------------
      */

      //Xin thua
      socket.on('CLIENT_SEND_GIVE_UP', req => {
        const { user } = req;
        const indexPlayerInRoom = matches.findIndex(
          item =>
            item.player[0].email === user.email ||
            item.player[1].email === user.email
        );
        socket
          .to(matches[indexPlayerInRoom].roomID)
          .emit('SERVER_SEND_COMPETITOR_EXIT', {});
      });

      //Xin Hòa
      socket.on('CLIENT_SEND_ASK_TIE', req => {
        const { user } = req;
        const indexPlayerInRoom = matches.findIndex(
          item =>
            item.player[0].email === user.email ||
            item.player[1].email === user.email
        );
        socket
          .to(matches[indexPlayerInRoom].roomID)
          .emit('SERVER_SEND_COMPETITOR_ASK_TIE', {});
      });

      socket.on('CLIENT_SEND_AGREE_COMPETITOR_ASK_TIE', req => {
        const { user } = req;
        const indexPlayerInRoom = matches.findIndex(
          item =>
            item.player[0].email === user.email ||
            item.player[1].email === user.email
        );
        socket
          .to(matches[indexPlayerInRoom].roomID)
          .emit('SERVER_SEND_AGREE_COMPETITOR_ASK_TIE', {});
      });

      // Xin đi lại
      socket.on('CLIENT_SEND_ASK_UNDO', req => {
        const { user } = req;
        const indexPlayerInRoom = matches.findIndex(
          item =>
            item.player[0].email === user.email ||
            item.player[1].email === user.email
        );
        socket
          .to(matches[indexPlayerInRoom].roomID)
          .emit('SERVER_SEND_COMPETITOR_ASK_UNDO', {});
      });
 
      socket.on('CLIENT_SEND_AGREE_COMPETITOR_ASK_UNDO', req => {
        const { user } = req;
        const indexPlayerInRoom = matches.findIndex(
          item =>
            item.player[0].email === user.email ||
            item.player[1].email === user.email
        );
        socket
          .to(matches[indexPlayerInRoom].roomID)
          .emit('SERVER_SEND_AGREE_COMPETITOR_ASK_UNDO', {});
      });
    });
  });
};
