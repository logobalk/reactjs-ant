/*
 *
 * LoginPage actions
 *
 */

import {
  SET_DEFAULT,
  LOGIN,
  LOGOUT,
} from './constants';

export function setDefault() {
  return {
    type: SET_DEFAULT,
  };
}

export function login(credential) {
  return {
    type: LOGIN,
    credential,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}


