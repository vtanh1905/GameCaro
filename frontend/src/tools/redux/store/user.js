/* eslint-disable consistent-return */
import * as types from 'tools/redux/constants';

const initialState = null;

export default function user(state = initialState, action) {
  let user = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case types.SAVE_USER:
      user = action.user;
      return user;
    default:
      return state;
  }
}
