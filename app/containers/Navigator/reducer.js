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

import menuItems from './navigatorData';

import {
  SET_MENU_ITEM,
  SET_SELECTED_ITEM,
  SET_IS_MOBILE,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  menuItems: menuItems.create(),
  selectedMenuItem: {
    key: '',
    item: [],
  },
  // isMobile: false,
});

function navigationReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_ITEM:
      return state.set('selectedMenuItem', action.selectedMenuItem);
    case SET_MENU_ITEM:
      return state.set('menuItems', action.menuItems);
    // case SET_IS_MOBILE:
    //   return state.set('isMobile', action.isMobile);
    default:
      return state;
  }
}

export default navigationReducer;
