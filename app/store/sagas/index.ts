/**
 *  Redux saga class init
 */
import { takeEvery, all, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/types';
import {
  loginSaga,
  registerSaga,
  searchUsersSaga,
  watchSearchUsersRequest,
} from './loginRegisterSaga';
import HomeSaga from './HomeSaga';

import { groupSaga, fetchGroupSaga, addGroupSaga, deleteGroupSaga } from './groupSaga';
import { DeleteExpenseSaga, ExpenseSaga, getExpenseListSaga, updateExpensePaymentStatusSaga } from './ExpenseSaga';

export default function* watch() {
  yield all([
    takeEvery(types.LOGIN_REQUEST, loginSaga),
    takeEvery(types.REGISTER_REQUEST, registerSaga),
    takeEvery(types.FetchEmployees, HomeSaga),
    takeEvery(types.FetchGroupMembers, groupSaga),
    takeEvery(types.FETCH_GROUPS, fetchGroupSaga),
    takeLatest(types.ADD_GROUP, addGroupSaga),
    takeLatest(types.FETCH_USERS_BY_PARAM, searchUsersSaga),
    takeEvery(types.ADD_EXPENSE, ExpenseSaga),
    takeEvery(types.FETCH_EXPENSES, getExpenseListSaga),
    takeLatest(types.DELETE_GROUP, deleteGroupSaga),
    takeLatest(types.UPDATE_EXPENSE_STATUS, updateExpensePaymentStatusSaga),
    takeLatest(types.DELETE_EXPENSE, DeleteExpenseSaga),
  ]);
}
