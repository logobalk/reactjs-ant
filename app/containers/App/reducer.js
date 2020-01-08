/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  SET_MENU_ACTION,
  SET_AUTH,
  SET_CHECK_TOKEN,
  LOGOUT,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  auth: {
    isAuthenticated: false,
    isCheckToken: false,
  },
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  menuOpen: false,
});

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOS:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'repositories'], false);
    case LOAD_REPOS_SUCCESS:
      return state
        .setIn(['userData', 'repositories'], action.repos)
        .set('loading', false)
        .set('currentUser', action.username);
    case LOAD_REPOS_ERROR:
      return state.set('error', action.error).set('loading', false);
    case SET_MENU_ACTION:
      return state.set('menuOpen', action.menuOpen);
    case SET_AUTH:
      return state.setIn(['auth', 'isAuthenticated'], action.status);
    case SET_CHECK_TOKEN:
      return state.setIn(['auth', 'isCheckToken'], action.status);
    case LOGOUT:
      return state.setIn(['auth', 'isAuthenticated'], false);
    default:
      return state;
  }
}

export default globalReducer;
