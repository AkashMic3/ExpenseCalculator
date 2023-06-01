/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import {loginSaga, registerSaga} from './loginRegisterSaga';
import HomeSaga from './HomeSaga';
import { groupSaga, fetchGroupSaga } from './groupSaga';



export default function* watch() {
  yield all([
    takeEvery(types.LOGIN_REQUEST, loginSaga),
    takeEvery(types.REGISTER_REQUEST, registerSaga),
    takeEvery(types.FetchEmployees, HomeSaga),
    takeEvery(types.FetchGroupMembers, groupSaga),
    takeEvery(types.FETCH_GROUPS, fetchGroupSaga),
  ]);
}
