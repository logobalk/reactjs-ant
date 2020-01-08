// import {
//   take, call, fork, put, cancel, all,
// } from 'redux-saga/effects';

// import {
//   SET_MENU_ITEM,
// } from './constants';

// import {
//   triggerRoleListSuccess,
//   triggerRoleListError,
// } from './actions';


// function* performGetRequestMenu() {
//   try {
//     const ensureRoleListData = yield call(callRequestRoleList);
//     // Ensure that type and sources is included in result.
//     yield put(setStateMenuAction({ roleList }));
//   } catch (error) {
//     yield put(triggerRoleListError({ error }));
//   }
// }

// function* rootSaga() {
//   while (true) {
//     yield take(REQUEST_MENU_ACTION);
//     const task = yield fork(performGetRequestMenu);
//     if (task) {
//       yield cancel(task);
//     }
//   }
// }

// export default function* () {
//   yield all([
//     rootSaga(),
//   ]);
// }
