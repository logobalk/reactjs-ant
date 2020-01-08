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
  SET_TABLE_INSPECTION_DATA,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  inspectionItems: [],
});

function mainPagerReducer(state = initialState, action) {
  switch (action.type) {
    case SET_TABLE_INSPECTION_DATA:
      return state.set('inspectionItems', action.inspectionItems);
    default:
      return state;
  }
}

export default mainPagerReducer;
