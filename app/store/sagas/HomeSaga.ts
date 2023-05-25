/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { call, put } from 'redux-saga/effects';
// import { delay } from 'redux-saga';

import { Alert } from 'react-native';
// import loginUser from 'app/services/loginUser';
import * as homeActions from 'app/store/actions/homeActions';
import getUsers from 'app/services/Home';
import axios from 'axios';
import { apiClient } from 'app/services/client';
import ApiConfig from 'app/config/api-config';

// Our worker Saga that logins the user
export default function* fetchProducts() {
  // yield put(loginActions.enableLoader());
  console.log('saga inside fetch');
  //how to call api
  // const res: any = yield apiClient
  //   .get(ApiConfig.getEmployees)
  //   .then((resp: any) => {
  //     console.log('res', resp, resp.status);
  //   })
  //   .catch(() => {});

  const response: [any] = yield call(getUsers);

  console.log('new Data', response.data[0].body);
  // console.log(JSON.parse(response.data));
  //mock response
  //  const response = { success: true, data: { id: 1 }, message: 'Success' };

  if (response.data) {
    // console.log('inside response', response.data);
    yield put(homeActions.Fetchres(response.data));
    //yield put(loginActions.disableLoader());

    // no need to call navigate as this is handled by redux store with SwitchNavigator
    //yield call(navigationActions.navigateToHome);
  }
  // else {
  //   yield put(loginActions.loginFailed());
  //   yield put(loginActions.disableLoader());
  //   setTimeout(() => {
  //     Alert.alert('BoilerPlate', response.message);
  //   }, 200);
  // }
}
