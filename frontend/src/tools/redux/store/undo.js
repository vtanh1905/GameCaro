/* eslint-disable consistent-return */
import * as types from 'tools/redux/constants';

const initialState = false;

export default function undo(state = initialState, action) {
  const undo = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case types.SET_VALUE_UNDO:
      return action.value;
    case types.TOGGLE_VALUE_UNDO:
      return !undo;
    default:
      return undo;
  }
}
