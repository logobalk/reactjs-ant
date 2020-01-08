import { takeLatest } from 'redux-saga/effects';
import CookieUtil from 'utils/cookieUtil';
import TokenChecker from 'utils/tokenChecker';
import { LOGOUT, tokenOrigin, TOKEN } from './constants';

// import {
//   REQUEST_MENU_ACTION,
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
export function* logout() {
  // console.log('this is logout');
  // post message to delete token
  try {
    TokenChecker.setToken(tokenOrigin, '');
  } catch(err) {
    console.error(err);
  }
  yield CookieUtil.removeCookie(TOKEN);
}


export default function* () {
  // yield all([
  //   rootSaga(),
  // ]);
  yield takeLatest(LOGOUT, logout);
}
