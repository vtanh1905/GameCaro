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

export const fetchData = data => ({
  type: types.FETCH_DATA,
  data
});

export const fetchDataRequest = () => {
  return dispatch => {
    // eslint-disable-next-line no-undef
    return fetch('https://pokeapi.co/api/v2/pokemon/ditto/').then(res => {
      dispatch(fetchData(res));
      console.log(res);
    });
  };
};
