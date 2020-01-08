import { put, all, call } from 'redux-saga/effects';
import { ApiService } from 'utils/services';
import {
  setMaterialGroup,
} from './actions';

// Individual exports for testing
export default function* materialGroupSaga() {
  // See example in containers/HomePage/saga.js
  yield all([
    getMaterialGroup(),
  ]);
}

function callUpdateRequestMatData() {
  return ApiService.get('/api/material/group');
}

function* getMaterialGroup() {
  // yield take(CALL_TABLE_INSPECTION_DATA);
  // const inspectionItems = yield select(state => state.get('main').toJS().inspectionItems);
  const resp = yield call(callUpdateRequestMatData);
  // console.log('eiei===>', resp);
  yield put(setMaterialGroup(resp));
}
