import { combineReducers } from 'redux';
import caro from './store/caro';
import notify from './store/notify';
import user from './store/user';

const reducers = combineReducers({
  caro,
  notify,
  user
});

export default reducers;
