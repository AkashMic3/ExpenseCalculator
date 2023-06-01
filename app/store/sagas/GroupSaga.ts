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
import { getMembers } from 'app/services/group';

// Our worker Saga that logins the user

export function* groupSaga(action: any): Generator<any, void, unknown> {
  yield put(loginActions.enableLoader());
  const { group_Id } = action;
  console.log('griup', group_Id);
  try {
    const response = yield call(getMembers, { group_Id });
    console.log(response, 'success');
  } catch (err) {
    console.log(err, 'error');
  }
  // try {
  //   yield call(
  //     [realm.emailPasswordAuth, realm.emailPasswordAuth.registerUser],
  //     { email: email, password: password },
  //   );
  //   const credentials = Realm.Credentials.emailPassword(email, password);
  //   const response: any = yield realm.logIn(credentials);
  //   yield put(
  //     loginActions.onLoginResponse({
  //       isLoggedIn: response.isLoggedIn,
  //       id: response.id,
  //       name: name,
  //       email: email,
  //       phone: phone,
  //     }),
  //   );
  //   if (response.id != null) {
  //     const registerResponse = yield call(registerUser, {
  //       user_id: response.id,
  //       email: email,
  //       phone: phone,
  //       name: name,
  //     });
  //     console.log('DEBUG:', registerResponse);
  //     if (registerResponse.data.status == 'success') {
  //       yield put(loginActions.disableLoader());
  //       yield put(showFlashMessage('User Registration completed :)'));
  //     }
  //   } else {
  //     yield put(loginActions.loginFailed());
  //     yield put(loginActions.disableLoader());
  //   }
  // } catch (err) {
  //   console.log('error:', err);
  //   yield put(loginActions.loginFailed());
  //   yield put(loginActions.disableLoader());
  // }
}
