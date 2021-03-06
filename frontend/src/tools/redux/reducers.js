import { combineReducers } from 'redux';
import caro from './store/caro';
import notify from './store/notify';
import user from './store/user';
import io from './store/io';
import competitor from './store/competitor';
import caroOnline from './store/caroOnline';
import undo from './store/undo';

const reducers = combineReducers({
  caro,
  notify,
  user,
  io,
  competitor,
  caroOnline,
  undo
});

export default reducers;
