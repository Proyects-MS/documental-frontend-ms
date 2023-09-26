import { PROCESS_SELECTED, ROLE_SELECTED } from "../types";

const INIT_STATE = {
    roleSelected: {},
    processSelected: {},
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ROLE_SELECTED:
      return { ...state, roleSelected: action.payload };
    case PROCESS_SELECTED:
      return { ...state, processSelected: action.payload};
    default:
      return { ...state };
  }
};