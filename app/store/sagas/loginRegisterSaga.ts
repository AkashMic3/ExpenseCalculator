/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { call, delay, put, race, spawn, select } from 'redux-saga/effects';
// import { delay } from 'redux-saga';

import { Alert } from 'react-native';
// import loginUser from 'app/services/loginUser';
import * as loginActions from 'app/store/actions/loginRegisterActions';
import realm from 'app/config/realm-config';
import { Realm } from '@realm/react';
import { registerUser } from 'app/services/loginRegisterUser';

// Our worker Saga that logins the user
export function* loginSaga(action: any): any {
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
  const { email, password, phone, name } = action;
  try {
    yield call([realm.emailPasswordAuth, realm.emailPasswordAuth.registerUser], { email: email, password: password })
    const credentials = Realm.Credentials.emailPassword(email, password);
    const response: any = yield realm.logIn(credentials);
    yield put(loginActions.onLoginResponse({ isLoggedIn: response.isLoggedIn, id: response.id, name: name, email:email, phone:phone}));
    if (response.isLoggedIn) {
      const registerResponse = yield call(registerUser, {
        user_id: response.id,
        email: email,
        phone: phone,
        name: name
      })
      if (registerResponse.status == 'success') {
        yield put(loginActions.disableLoader());
      }
    }
    else {
      yield put(loginActions.loginFailed());
      yield put(loginActions.disableLoader());
    }
  }
  catch (err) {
    console.log("eerrr:", err)
    yield put(loginActions.loginFailed());
    yield put(loginActions.disableLoader());
  }
}

