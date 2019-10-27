/* eslint-disable consistent-return */
import * as types from 'tools/redux/constants';

const initialState = {
  errorRegister: '',
  errorLogin: '',
  errorProfile: ''
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
    case types.CHANGE_NOTIFY_ERROR_PROFILE:
      notify.errorProfile = action.msg;
      return notify;
    default:
      return state;
  }
}
