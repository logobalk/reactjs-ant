import { fromJS } from 'immutable';

import {
  TABLE_ROW_DETAILS_SELECT,
  TABLE_ROW_DETAILS_UNSELECT,
  TABLE_PAGE_SET,
  TABLE_ROWS_PER_PAGE_SET,
} from './constants';

export const initialState = fromJS({
  selectedRowDetails: null,
  currentUrl: null,
  rowsPerPage: 0,
  page: 0,
});

export default function tableReducer(state = initialState, action) {
  switch (action.type) {
    case TABLE_ROW_DETAILS_SELECT:
      return state.set('selectedRowDetails', action.selectedRowDetails);
    case TABLE_ROW_DETAILS_UNSELECT:
      return state.set('selectedRowDetails', null);
    case TABLE_PAGE_SET:
      return state.set('page', action.page);
    case TABLE_ROWS_PER_PAGE_SET:
      return state.set('rowsPerPage', action.rowsPerPage);
    default:
      return state;
  }
}
