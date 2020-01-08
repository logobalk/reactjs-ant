/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */


import {
  SET_MENU_ITEM,
  SET_SELECTED_ITEM,
  SET_IS_MOBILE,
} from './constants';


export function setStateMenuItem(selectedMenuItem) {
  // history.push(path);
  return {
    type: SET_SELECTED_ITEM,
    selectedMenuItem,
  };
}

export function setMenuItems(menuItems) {
  // history.push(path);
  return {
    type: SET_MENU_ITEM,
    menuItems,
  };
}

// export function setIsMobile(isMobile) {
//   // history.push(path);
//   return {
//     type: SET_IS_MOBILE,
//     isMobile,
//   };
// }
