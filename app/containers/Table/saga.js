
import {
  take, select, put, all, call,
} from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'connected-react-router';
import {
  TABLE_ROW_DETAILS_SELECT,
} from './constants';

import {
  selectTableRowDetails,
  unselectTableRowDetails,
  setPage,
  setRowsPerPage,
} from './actions';
import TableDefaultSetting from './tableDefaultSetting';
import { ApiService } from '../../utils/services';

function callUpdateRequestMatData() {
  const url = ApiService.getApiUrl();
  return ApiService.get(`${url}/api/material/type`);
}

function* selectedRowDetailsSaga() {
  while (true) {
    yield take(TABLE_ROW_DETAILS_SELECT);
    const selectedRowDetails = yield select(state => state.get('table').toJS().selectedRowDetails);
    yield put(selectTableRowDetails({ selectedRowDetails }));
    yield call(callUpdateRequestMatData);
  }
}

function* routerSyncSaga() {
  while (true) {
    yield take(LOCATION_CHANGE);
    yield put(unselectTableRowDetails());
    yield put(setPage(TableDefaultSetting.page));
    yield put(setRowsPerPage(TableDefaultSetting.rowsPerPage));
  }
}

export default function* () {
  yield all([
    routerSyncSaga(),
    selectedRowDetailsSaga(),
  ]);
}
