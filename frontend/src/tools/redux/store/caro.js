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

export default function board(state = initialState, action) {
  const caro = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case types.CLICK_SQUARE:
      if (caro.board[action.i][action.j]) return caro; // TH Đã Click vao ô đó rồi

      caro.board[action.i][action.j] = caro.turnPlayer1 ? 'X' : 'O';

      //Xử lý History
      if (caro.indexCurrent + 1 !== caro.historyBoard.length) {
        caro.historyBoard = caro.historyBoard.slice(0, caro.indexCurrent + 1);
      }

      caro.historyBoard.push({
        i: action.i,
        j: action.j,
        turnPlayer1: caro.turnPlayer1,
        board: caro.board
      });

      //Xét lại lượt đánh
      caro.turnPlayer1 = !caro.turnPlayer1;
      caro.indexCurrent = caro.historyBoard.length - 1;

      //Kiem Tra Chiên thắng
      if (
        CaroBoard.CheckChienThang(
          caro.board,
          caro.board[action.i][action.j],
          action.i,
          action.j
        )
      ) {
        caro.showModal = true;
        caro.lineWin = CaroBoard.lineWin;
      }

      return caro;

    case types.RESET_BOARD:
      caro.board = createMatrix(20, 20);
      caro.showModal = false;
      caro.lineWin = [];
      caro.historyBoard = [];
      caro.indexCurrent = 0;
      return caro;

    case types.BACK_BOARD:
      caro.board = caro.historyBoard[action.index].board;
      caro.turnPlayer1 = !caro.historyBoard[action.index].turnPlayer1;
      caro.indexCurrent = action.index;
      return caro;

    case types.BACK_BOARD_WITH_BOT:
      if (caro.historyBoard[action.index].turnPlayer1 === true) {
        action.index += 1;
      }
      caro.board = caro.historyBoard[action.index].board;
      caro.turnPlayer1 = !caro.historyBoard[action.index].turnPlayer1;
      caro.indexCurrent = action.index;
      return caro;

    case types.ORDER_HISTORY:
      caro.orderHistory = caro.orderHistory === 'ASC' ? 'DESC' : 'ASC';
      return caro;

    case types.USER_CLICK_SQUARE:
      if (caro.board[action.i][action.j]) return caro; // TH Đã Click vao ô đó rồi

      caro.board[action.i][action.j] = 'X';

      //Xử lý History
      if (caro.indexCurrent + 1 !== caro.historyBoard.length) {
        caro.historyBoard = caro.historyBoard.slice(0, caro.indexCurrent + 1);
      }

      caro.historyBoard.push({
        i: action.i,
        j: action.j,
        turnPlayer1: caro.turnPlayer1,
        board: caro.board
      });

      //Xét lại lượt đánh
      caro.turnPlayer1 = !caro.turnPlayer1;
      caro.indexCurrent = caro.historyBoard.length - 1;

      //Kiem Tra Chiên thắng
      if (
        CaroBoard.CheckChienThang(
          caro.board,
          caro.board[action.i][action.j],
          action.i,
          action.j
        )
      ) {
        caro.showModal = true;
        caro.lineWin = CaroBoard.lineWin;
        caro.turnPlayer1 = !caro.turnPlayer1;
      }

      return caro;

    case types.BOT_CLICK_SQUARE:
      //TH Người Đã Win roi
      if (caro.showModal) {
        return caro;
      }
      const botClickPosition = CaroBoard.BotCaro(caro.board, 'O');
      caro.board[botClickPosition.i][botClickPosition.j] = 'O';

      //Xử lý History
      if (caro.indexCurrent + 1 !== caro.historyBoard.length) {
        caro.historyBoard = caro.historyBoard.slice(0, caro.indexCurrent + 1);
      }

      caro.historyBoard.push({
        i: botClickPosition.i,
        j: botClickPosition.j,
        turnPlayer1: caro.turnPlayer1,
        board: caro.board
      });

      //Xét lại lượt đánh
      caro.turnPlayer1 = !caro.turnPlayer1;
      caro.indexCurrent = caro.historyBoard.length - 1;

      //Kiem Tra Chiên thắng
      if (
        CaroBoard.CheckChienThang(
          caro.board,
          caro.board[botClickPosition.i][botClickPosition.j],
          botClickPosition.i,
          botClickPosition.j
        )
      ) {
        caro.showModal = true;
        caro.lineWin = CaroBoard.lineWin;
        caro.turnPlayer1 = !caro.turnPlayer1;
      }

      return caro;

    default:
      return state;
  }
}
