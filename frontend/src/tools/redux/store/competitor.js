/* eslint-disable consistent-return */
import * as types from 'tools/redux/constants';

const initialState = null;

export default function competitor(state = initialState, action) {
  let competitor = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case types.SAVE_COMPETITOR:
      competitor = action.competitor;
      return competitor;
    default:
      return state;
  }
}
