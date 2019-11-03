/* eslint-disable consistent-return */
import * as types from 'tools/redux/constants';
import * as CaroBoard from 'utils/Caro';

const createMatrix = (row, col) => {
  const matrix = [];
  for (let i = 0; i < row; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < col; j += 1) {
      matrix[i][j] = null;
    }
  }
  return matrix;
};

const initialState = {
  board: createMatrix(20, 20),
  turnPlayer1: true,
  lineWin: [],
  showModal: false,
  indexCurrent: 0,
  historyBoard: [],
  orderHistory: 'ASC'
};

export default function boardOnline(state = initialState, action) {
  const caroOnline = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case types.DRAW_CHAR_SQUARE:
      if (caroOnline.board[action.i][action.j]) return caroOnline; // TH Đã Click vao ô đó rồi
      caroOnline.board[action.i][action.j] = action.char;

      //Xử lý History
      if (caroOnline.indexCurrent + 1 !== caroOnline.historyBoard.length) {
        caroOnline.historyBoard = caroOnline.historyBoard.slice(
          0,
          caroOnline.indexCurrent + 1
        );
      }

      caroOnline.historyBoard.push({
        i: action.i,
        j: action.j,
        turnPlayer1: caroOnline.turnPlayer1,
        board: caroOnline.board
      });

      //Xét lại lượt đánh
      caroOnline.turnPlayer1 = !caroOnline.turnPlayer1;
      caroOnline.indexCurrent = caroOnline.historyBoard.length - 1;

      //Kiem Tra Chiên thắng
      if (
        CaroBoard.CheckChienThang(
          caroOnline.board,
          caroOnline.board[action.i][action.j],
          action.i,
          action.j
        )
      ) {
        caroOnline.showModal = true;
        caroOnline.lineWin = CaroBoard.lineWin;
      }
      return caroOnline;

    case types.RESET_BOARD_ONLINE:
      caroOnline.board = createMatrix(20, 20);
      caroOnline.showModal = false;
      caroOnline.lineWin = [];
      caroOnline.historyBoard = [];
      caroOnline.indexCurrent = 0;
      return caroOnline;

    default:
      return state;
  }
}
