/*
 *
 * InspectionList actions
 *
 */

import {
  DEFAULT_ACTION,
  SET_TABLE_INSPECTION_DATA,
  CALL_TABLE_INSPECTION_DATA,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function setTableInspectionData(inspectionItems) {
  return {
    type: SET_TABLE_INSPECTION_DATA,
    inspectionItems,
  };
}

export function callTableInspectionData() {
  return {
    type: CALL_TABLE_INSPECTION_DATA,
  };
}