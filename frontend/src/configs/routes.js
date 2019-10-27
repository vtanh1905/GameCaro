import React from 'react';

import LobbyContainer from 'pages/Lobby/LobbyContainer';
import LoginContainer from 'pages/Login/LoginContainer';
import RegisterContainer from 'pages/Register/RegisterContainer';
import ProfileContainer from 'pages/Profile/ProfileContainer';
import NoMatch from 'pages/NoMatch/NoMatch';

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
    component: () => <RegisterContainer />
  },
  {
    path: '/profile',
    exact: false,
    component: () => <ProfileContainer />
  },
  {
    path: '*',
    exact: false,
    component: () => <NoMatch />
  }
];
