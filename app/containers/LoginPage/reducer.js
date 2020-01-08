/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_DEFAULT,
  LOGIN,
  // LOGIN_FAIL,
} from './constants';

export const initialState = fromJS({
  loading: false,
  isFail: false,
});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DEFAULT:
      return initialState;
    case LOGIN:
      return state.set('loading', true);
    default:
      return state;
  }
}

export default loginPageReducer;
