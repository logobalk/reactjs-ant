import { all } from 'redux-saga/effects';
import { tableSaga } from 'containers/Table';
// import { mainPageSaga } from 'containers/HomePage/InspectionList';


export default function* sagas() {
  yield all([
    tableSaga(),
    // mainPageSaga(),
  ]);
}
