/* eslint-disable consistent-return */
// import * as types from 'tools/redux/constants';
import io from 'socket.io-client';

const initialState = io.connect('http://localhost:3001');

export default function reducer(state = initialState, action) {
  const io = state;
  switch (action.type) {
    default:
      return io;
  }
}
