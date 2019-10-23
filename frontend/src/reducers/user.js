/* eslint-disable consistent-return */
import * as types from '../constants/index';

const initialState = (() => {
  const token = JSON.parse(localStorage.getItem('token'));
  //   console.log(token);
  if (token === null) {
    return null;
  }
  return fetch('http://localhost:3001/me', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });
})();

export default function board(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
