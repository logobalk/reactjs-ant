/*
 *
 * InspectionList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SET_TABLE_INSPECTION_DATA,
} from './constants';

export const initialState = fromJS({
  inspectionItems: [],
});

function inspectionListReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_TABLE_INSPECTION_DATA:
      return state.set('inspectionItems', action.inspectionItems);
    default:
      return state;
  }
}

export default inspectionListReducer;
