/*
 *
 * MaterialGroup reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SET_MATERIAL_GROUP,
} from './constants';

export const initialState = fromJS({
  materials: [],
});

function materialGroupReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_MATERIAL_GROUP:
      return state.set('materials', action.materialGroup);
    default:
      return state;
  }
}

export default materialGroupReducer;
