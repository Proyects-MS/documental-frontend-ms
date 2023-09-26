import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { PROFILES_SERVER } from '../../Constant';
import { LOGIN_USER } from '../types';

import { loginUserSuccess, loginUserPermissions } from './actions';

export function* watchLoginUser() {
    yield takeEvery(LOGIN_USER, loginWithEmailPassword);
}

function* loginWithEmailPassword({ payload }) {
  const { history } = payload;
  try {
    localStorage.clear();
    localStorage.setItem("token", payload.user.access_token);
    if(payload.user.user.profile_photo_path){
      localStorage.setItem('profileURL', `${PROFILES_SERVER}${payload.user.user.profile_photo_path}`);
    }
    localStorage.setItem('Name', payload.user.user.name);
    yield put(loginUserSuccess(payload.user.user));
    yield put(loginUserPermissions(payload.permissions));
    setTimeout(() => {
      history(`/dashboard`);
    }, 200);
  } catch (error) {
    console.log(error);
  }
}

export default function* rootSaga() {
    yield all([
      fork(watchLoginUser)
    ]);
}