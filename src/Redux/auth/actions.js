import { LOGIN_USER, LOGIN_USER_PERMISSIONS, LOGIN_USER_SUCCESS } from '../types';
  
export const loginUser = (user, history) => ({
    type: LOGIN_USER,
    payload: { user, history },
});
  
export const loginUserSuccess = (user) => ({
    type: LOGIN_USER_SUCCESS,
    payload: user,
});

export const loginUserPermissions = (permissions) => ({
    type: LOGIN_USER_PERMISSIONS,
    payload: permissions,
});
  