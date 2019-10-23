import { combineReducers } from 'redux';
import caro from './caro';
import notify from './notify';
import user from './user';

const reducers = combineReducers({
  caro,
  notify,
  user
});

export default reducers;
