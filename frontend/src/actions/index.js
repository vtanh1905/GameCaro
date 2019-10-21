import * as types from '../constants/index';

export const clickQuare = (i, j) => ({
  type: types.CLICK_SQUARE,
  i,
  j
});

export const resetBoard = () => ({
  type: types.RESET_BOARD
});

export const backBoard = index => ({
  type: types.BACK_BOARD,
  index
});

export const orderHistory = () => ({
  type: types.ORDER_HISTORY
});
