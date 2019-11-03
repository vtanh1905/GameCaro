import React from 'react';

import LobbyContainer from 'pages/Lobby/LobbyContainer';
import LoginContainer from 'pages/Login/LoginContainer';
import RegisterContainer from 'pages/Register/RegisterContainer';
import ProfileContainer from 'pages/Profile/ProfileContainer';
import CaroWithBotContrainer from 'pages/CaroWithBot/CaroWithBotContrainer';
import CaroOnlineContainer from 'pages/CaroOnline/CaroOnlineContainer';
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
    path: '/play/caro/offline',
    exact: false,
    component: () => <CaroWithBotContrainer />
  },
  {
    path: '/play/caro/online',
    exact: false,
    component: () => <CaroOnlineContainer />
  },
  {
    path: '*',
    exact: false,
    component: () => <NoMatch />
  }
];
