/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { call, delay, put, race, spawn } from 'redux-saga/effects';
// import { delay } from 'redux-saga';

import { Alert } from 'react-native';
// import loginUser from 'app/services/loginUser';
import * as loginActions from 'app/store/actions/loginRegisterActions';
import realm from 'app/config/realm-config';
import { Realm } from '@realm/react';

// Our worker Saga that logins the user
export function* loginSaga(action: any) {
  yield put(loginActions.enableLoader());
  const { email, password } = action;
  try {
    const credentials = Realm.Credentials.emailPassword(email, password);
    const response: any = yield realm.logIn(credentials);
    if (response.isLoggedIn) {
      yield put(loginActions.onLoginResponse({ isLoggedIn: response.isLoggedIn, id: response.id }));
      yield put(loginActions.disableLoader());
    } else {
      yield put(loginActions.loginFailed());
      yield put(loginActions.disableLoader());
    }
  } catch (err) {
    yield put(loginActions.loginFailed());
    yield put(loginActions.disableLoader());
  }


}

export function* registerSaga(action: any) {
  yield put(loginActions.enableLoader());
  const { email, password, phone } = action;
  try {
    yield call([realm.emailPasswordAuth, realm.emailPasswordAuth.registerUser], { email: email, password: password })
    const response: any = yield put(loginActions.requestLogin(email, password))
    console.log("reg", response)
  }
  catch (err) {
    yield put(loginActions.loginFailed());
    yield put(loginActions.disableLoader());
  }
}

