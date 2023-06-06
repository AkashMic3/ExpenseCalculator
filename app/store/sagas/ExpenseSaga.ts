import {
  AddExpense,
  deleteExpense,
  getExpense,
  updateExpenseStatus,
} from 'app/services/Expense';
import { call, put } from 'redux-saga/effects';
import * as expenseActions from '../actions/expenseActions';
import * as loginActions from 'app/store/actions/loginRegisterActions';
export function* ExpenseSaga(action: any): Generator<any, void, unknown> {
  yield put(loginActions.enableLoader());
  try {
    const response = yield call(AddExpense, { data: action.requestData });
  } catch (err) {
    console.log(err, 'error');
  }
  yield put(loginActions.disableLoader());
}

export function* getExpenseListSaga(action: any): any {
  yield put(loginActions.enableLoader());
  const data = { group_id: action.group_id, userId: action.userId };
  console.log('fetch1122', data);
  try {
    const response = yield call(getExpense, { data });
    console.log(response, 'resss');
    yield put(expenseActions.setExpense(response.data.response));
  } catch (err) {
    console.log(err, 'error');
  }
  yield put(loginActions.disableLoader());
}

export function* updateExpensePaymentStatusSaga(action: any): any {
  yield put(loginActions.enableLoader());
  const data = {
    expense_id: action.expense_id,
    user_id: action.user_id,
    payment_status: action.payment_status,
  };
  console.log('update_Status_action', action);
  try {
    const response = yield call(updateExpenseStatus, { data });
    console.log(response, 'payment_status_saga');
    yield put(expenseActions.fetchExpense(action.group_id, action.owner_id));
  } catch (err) {
    console.log(err, 'error');
  }
  yield put(loginActions.disableLoader());
}

export function* DeleteExpenseSaga(action: any): Generator<any, void, unknown> {
  console.log('resssss');
  try {
    const response = yield call(deleteExpense, { action });
    console.log(response, 'resssss');
  } catch (err) {
    console.log(err, 'err');
  }
}
