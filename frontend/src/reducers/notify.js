/* eslint-disable consistent-return */
import * as types from '../constants/index';

const initialState = {
  errorRegister: '',
  errorLogin: ''
};

export default function notify(state = initialState, action) {
  const notify = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case types.CHANGE_NOTIFY_ERROR_REGISTER:
      notify.errorRegister = action.msg;
      return notify;
    case types.CHANGE_NOTIFY_ERROR_LOGIN:
      notify.errorLogin = action.msg;
      return notify;
    default:
      return state;
  }
}
