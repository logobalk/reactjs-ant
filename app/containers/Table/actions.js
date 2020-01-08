import {
  TABLE_ROW_DETAILS_SELECT,
  TABLE_ROW_DETAILS_UNSELECT,
  TABLE_PAGE_SET,
  TABLE_ROWS_PER_PAGE_SET,
} from './constants';

export function selectTableRowDetails({ selectedRowDetails }) {
  return {
    type: TABLE_ROW_DETAILS_SELECT,
    selectedRowDetails,
  };
}

export function unselectTableRowDetails() {
  return {
    type: TABLE_ROW_DETAILS_UNSELECT,
  };
}

export function setPage(page) {
  return {
    type: TABLE_PAGE_SET,
    page,
  };
}

export function setRowsPerPage(rowsPerPage) {
  return {
    type: TABLE_ROWS_PER_PAGE_SET,
    rowsPerPage,
  };
}
