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
import { getUserInfo, registerUser } from 'app/services/loginRegisterUser';
import { showFlashMessage } from '../actions/flashMessageActions';

// Our worker Saga that logins the user
export function* loginSaga(action: any): any {
  yield put(loginActions.enableLoader());
  const { email, password } = action;
  try {
    const credentials = Realm.Credentials.emailPassword(email, password);
    const response: any = yield realm.logIn(credentials);

    const userResponse = yield call(getUserInfo, { user_id: response.id });

    if (response.isLoggedIn) {
      yield put(
        loginActions.onLoginResponse({
          isLoggedIn: response.isLoggedIn,
          id: response.id,
          name: userResponse?.data?.response?.name,
          email: userResponse?.data?.response?.email,
          phone: userResponse?.data?.response?.phone,
        }),
      );

      yield put(
        showFlashMessage(
          `User ${userResponse?.data?.response?.name} logged in.`,
        ),
      );

      yield put(loginActions.disableLoader());
    } else {
      yield put(loginActions.loginFailed());
      yield put(loginActions.disableLoader());
    }
  } catch (err) {
    console.log(err);
    yield put(loginActions.loginFailed());
    yield put(loginActions.disableLoader());
  }
}

export function* registerSaga(action: any) {
  yield put(loginActions.enableLoader());
  const { email, password, phone, name } = action;
  try {
    yield call(
      [realm.emailPasswordAuth, realm.emailPasswordAuth.registerUser],
      { email: email, password: password },
    );
    const credentials = Realm.Credentials.emailPassword(email, password);
    const response: any = yield realm.logIn(credentials);
    yield put(
      loginActions.onLoginResponse({
        isLoggedIn: response.isLoggedIn,
        id: response.id,
        name: name,
        email: email,
        phone: phone,
      }),
    );
    if (response.id != null) {
      const registerResponse = yield call(registerUser, {
        user_id: response.id,
        email: email,
        phone: phone,
        name: name,
      });
      console.log('DEBUG:', registerResponse);
      if (registerResponse.data.status == 'success') {
        yield put(loginActions.disableLoader());
        yield put(showFlashMessage('User Registration completed :)'));
      }
    } else {
      yield put(loginActions.loginFailed());
      yield put(loginActions.disableLoader());
    }
  } catch (err) {
    console.log('error:', err);
    yield put(loginActions.loginFailed());
    yield put(loginActions.disableLoader());
  }
}
