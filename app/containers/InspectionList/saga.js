import { take, call, put, all } from 'redux-saga/effects';
import { ApiService } from 'utils/services';
import {
  CALL_TABLE_INSPECTION_DATA,
} from './constants';
import {
  setTableInspectionData,
} from './actions';

function createRowData(rows) {
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

function callInspectionList() {
  return ApiService.get('/api/material/inspection-list'); // call proxy
}


function* getInspepctionList() {
  // yield take(CALL_TABLE_INSPECTION_DATA);
  const resp = yield call(callInspectionList);
  const inspectionItems = resp && resp.inspectionList && createRowData(resp.inspectionList);
  // console.log('inspectionItems===>', inspectionItems);
  yield put(setTableInspectionData(inspectionItems));
}


// Individual exports for testing
export default function* inspectionListSaga() {
  // See example in containers/HomePage/saga.js
  yield all([
    getInspepctionList(),
  ]);
}
