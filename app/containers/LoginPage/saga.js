import { delay } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
// import { ApiService } from 'utils/services';
// import request from 'utils/request';
import CookieUtil from 'utils/cookieUtil';
import TokenChecker from 'utils/tokenChecker';
import { tokenOrigin, TOKEN as TOKEN_NAME } from 'containers/App/constants';
import { setAuth } from 'containers/App/actions';
import { LOGIN } from './constants';




export function* login() {
  yield delay(1000);
  try {
    // const url = 'http://10.1.99.28:8080/auth/realms/spring-security/protocol/openid-connect/token';
    // const formData = new URLSearchParams();
    // formData.append('grant_type', 'password');
    // formData.append('client_id', 'spring-security-client');
    // formData.append('client_secret', 'f9d25935-dbae-43e6-b386-4a03bbef9ef4');
    // formData.append('username', 'hoylord');
    // formData.append('password', 'password');
    // const options = {
    //   method: 'POST',
    //   headers: {
    //     // 'Access-Control-Allow-Origin': '*',
    //     // 'Access-Control-Allow-Credentials': 'true',
    //     // 'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
    //     // 'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
    //     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8;',
    //   },
    //   body: formData,
    // };
    // const res =  yield call(request, url, options);
    // const { data } = res;
    // const token = data.access_token;
    const token = 'this is token!'; // TODO : this is mock up
    CookieUtil.setCookie(TOKEN_NAME, token);
    // post message to iframe for save token
    try {
      TokenChecker.setToken(tokenOrigin, token);
    } catch (err) {
      console.error(err);
    }
    yield put(setAuth(true));
  } catch (err) {
    console.error(err);
  }
}

// Individual exports for testing
export default function* loginPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOGIN, login);
}
