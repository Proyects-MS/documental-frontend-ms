import { combineReducers } from 'redux';

import authUser from './auth/reducer';
import appReducer from './app/reducer';

const reducers = combineReducers({
  authUser,
  appReducer
});

export default reducers;