/*
 * Stepper Reducer
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
import { combineReducers } from 'redux';
import {
  SET_START_STATUS,
} from './constants';
import { stepperDeatailsReducer } from './StepperDetails';

// The initial state of the App
const initialState = fromJS({
  isStart: false,
});

function stepperReducer(state = initialState, action) {
  switch (action.type) {
    case SET_START_STATUS:
      return state.set('isStart', action.isStart);
    default:
      return state;
  }
}

export default combineReducers({
  stepper: stepperReducer,
  stepperDeatails: stepperDeatailsReducer,
});
