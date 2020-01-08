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
import moment from 'moment';
import {
  SET_FILEDS_DETAIL,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  fields: {
    startDateTime: {
      value: moment(),
    },
    grade: {
      value: 'A',
    },
    checkBy: {
      value: '',
    },
    pressureNo: {
      value: '',
    },
    roomNo: {
      value: [],
    },
  },
  isStart: false,
});

function stepperDeatailsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FILEDS_DETAIL:
      return state.set('fields', action.fields);
    default:
      return state;
  }
}

export default stepperDeatailsReducer;
