import React from 'react';

import LobbyContainer from '../containers/LobbyContainer';
import LoginContainer from '../containers/LoginContainer';
import RegisterContainer from '../containers/RegisterContainer';
import Board from '../components/Board';

export default [
  {
    path: '/',
    exact: true,
    component: () => <LobbyContainer />
  },
  {
    path: '/login',
    exact: false,
    component: () => <LoginContainer />
  },
  {
    path: '/register',
    exact: false,
    component: history => <RegisterContainer history={history} />
  },
  {
    path: '/play',
    exact: false,
    component: () => <Board />
  }
];
