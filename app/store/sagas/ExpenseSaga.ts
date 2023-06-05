import { AddExpense, getExpense } from 'app/services/Expense';
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

export function* getExpenseListSaga(
  action: any,
): any{
  yield put(loginActions.enableLoader());
  const data = { group_id: action.group_id, userId: action.userId };
  console.log("fetch1122", data)
  try {
    const response = yield call(getExpense, { data });
    console.log(response,"resss")
    yield put(expenseActions.setExpense(response.data.response));
  } catch (err) {
    console.log(err, 'error');
  }
  yield put(loginActions.disableLoader());
}
