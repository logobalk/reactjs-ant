
import {
  take, select, put, all, call,
} from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'connected-react-router';
import {
  CALL_TABLE_INSPECTION_DATA,
} from './constants';

import {
  setTableInspectionData,
} from './actions';
import { ApiService } from '../../../utils/services';

function callUpdateRequestMatData() {
  // const url = ApiService.getApiUrl();
  return ApiService.get('/api/material/inspection-list'); // call proxy
}

function createRowData(rows) {
  console.log('rows===>', rows);
  const rowPage = [];
  if (!rows || !rows.length) {
    return [];
  }
  rows.forEach((element, i) => {
    const item = {
      id: i+1,
      inspectionStatus: element.inspectionStatus,
      inspectionLot: element.lotInspection,
      startDate: element.dateTime,
      materialCode: element.matCode,
      materialName: element.matName,
      batch: element.batch,
      container: element.container,
      lotContainer: element.lotContainer,
      lotQty: element.lotQty,
      uom: element.uom,
      actualLotQty: element.actualLotQty,
      status: element.status,
    };
    rowPage.push(item);
  });
  // this.setCounter();
  return rowPage;
}

function* setInspectionItems() {
  while (true) {
    yield take(CALL_TABLE_INSPECTION_DATA);
    // const inspectionItems = yield select(state => state.get('main').toJS().inspectionItems);
    const resp = yield call(callUpdateRequestMatData);
    const inspectionItems = resp && resp.inspectionList && createRowData(resp.inspectionList);
    console.log('inspectionItems===>', inspectionItems);
    yield put(setTableInspectionData(inspectionItems));
  }
}

function* routerSyncSaga() {
  while (true) {
    yield take(LOCATION_CHANGE);
  }
}

export default function* () {
  yield all([
    routerSyncSaga(),
    setInspectionItems(),
  ]);
}
