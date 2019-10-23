import * as types from '../constants/index';

/**
|--------------------------------------------------
| Board
|--------------------------------------------------
*/
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

/**
|--------------------------------------------------
| Register
|--------------------------------------------------
*/
export const registerRequest = user => {
  return dispatch => {
    return fetch('http://localhost:3001/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.register) {
          return true;
        }
        dispatch(changeNotifyErrorRegister('Thông tin không hợp lệ!'));
        return false;
      });
  };
};

/**
|--------------------------------------------------
| Login
|--------------------------------------------------
*/
export const loginRequest = user => {
  return dispatch => {
    return fetch('http://localhost:3001/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (!data.user) {
          dispatch(changeNotifyErrorLogin('Email hoặc mật khẩu không đúng!'));
          return false;
        }
        localStorage.setItem('token', JSON.stringify(data.token));
        return true;
      });
  };
};

/**
|--------------------------------------------------
| Notify
|--------------------------------------------------
*/

export const changeNotifyErrorRegister = msg => ({
  type: types.CHANGE_NOTIFY_ERROR_REGISTER,
  msg
});

export const changeNotifyErrorLogin = msg => ({
  type: types.CHANGE_NOTIFY_ERROR_LOGIN,
  msg
});
