import * as types from './constants';

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

export const backBoardWithBot = index => ({
  type: types.BACK_BOARD_WITH_BOT,
  index
});

export const orderHistory = () => ({
  type: types.ORDER_HISTORY
});

export const userClickQuare = (i, j) => ({
  type: types.USER_CLICK_SQUARE,
  i,
  j
});

export const botClickQuare = () => ({
  type: types.BOT_CLICK_SQUARE
});

/**
|--------------------------------------------------
| Board Online
|--------------------------------------------------
*/
export const drawCharSquare = (i, j, char) => ({
  type: types.DRAW_CHAR_SQUARE,
  i,
  j,
  char
});

export const resetBoardOnline = () => ({
  type: types.RESET_BOARD_ONLINE
});

/**
|--------------------------------------------------
| User
|--------------------------------------------------
*/

export const saveUser = user => ({
  type: types.SAVE_USER,
  user
});

/**
|--------------------------------------------------
| COMPETITOR
|--------------------------------------------------
*/

export const saveCompetitor = competitor => ({
  type: types.SAVE_COMPETITOR,
  competitor
});

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

export const changeNotifyErrorProfile = msg => ({
  type: types.CHANGE_NOTIFY_ERROR_PROFILE,
  msg
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
        if (data.errors[0].value === '') {
          dispatch(changeNotifyErrorRegister('Vui lòng nhập thông tin đầy đủ'));
        } else {
          dispatch(changeNotifyErrorRegister(data.errors[0].msg));
        }
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
        dispatch(saveUser(data.user));
        return true;
      });
  };
};

/**
|--------------------------------------------------
| Token
|--------------------------------------------------
*/

export const getUserFromToken = () => {
  return dispatch => {
    return fetch('http://localhost:3001/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
      }
    })
      .then(res => res.json())
      .then(data => {
        dispatch(saveUser(data));
      });
  };
};
