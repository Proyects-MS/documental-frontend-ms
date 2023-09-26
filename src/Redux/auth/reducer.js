import { LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_PERMISSIONS } from "../types";

const INIT_STATE = {
    currentUser: {},
    permissions: [],
    forgotUserMail: '',
    newPassword: '',
    resetPasswordCode: '',
    loading: false,
    error: '',
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        error: '',
      };
    case LOGIN_USER_PERMISSIONS:
      return {
        ...state,
        permissions: action.payload
      }
    default:
      return { ...state };
  }
};