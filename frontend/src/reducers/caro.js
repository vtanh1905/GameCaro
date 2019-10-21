/* eslint-disable consistent-return */
import * as types from '../constants/index';
import * as CaroBoard from '../helper/Caro';

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
  namePlayer1: 'Player 1',
  namePlayer2: 'Player 2',
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
      if (caro.board[action.i][action.j]) return caro; // TH Đã Click Roi

      caro.board[action.i][action.j] = caro.turnPlayer1 ? 'X' : 'O';

      if (caro.indexCurrent + 1 !== caro.historyBoard.length) {
        caro.historyBoard = caro.historyBoard.slice(0, caro.indexCurrent + 1);
      }

      caro.historyBoard.push({
        i: action.i,
        j: action.j,
        turnPlayer1: caro.turnPlayer1,
        board: caro.board
      });

      caro.turnPlayer1 = !caro.turnPlayer1;
      caro.indexCurrent = caro.historyBoard.length - 1;

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

    case types.ORDER_HISTORY:
      caro.orderHistory = caro.orderHistory === 'ASC' ? 'DESC' : 'ASC';
      return caro;
    default:
      return state;
  }
}
