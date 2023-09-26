import { PROCESS_SELECTED, ROLE_SELECTED } from '../types';
  
export const selectRole = (role) => ({
    type: ROLE_SELECTED,
    payload: role,
});
  
export const selectProcess = (process) => ({
    type: PROCESS_SELECTED,
    payload: process,
});