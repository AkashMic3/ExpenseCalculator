import { AddExpense, getExpense } from 'app/services/Expense';
import { call, put } from 'redux-saga/effects';
import * as expenseActions from '../actions/expenseActions';
export function* ExpenseSaga(action: any): Generator<any, void, unknown> {
  console.log(action, 'action');
  try {
    const response = yield call(AddExpense, { data: action.requestData });
    console.log(response, 'response');
  } catch (err) {
    console.log(err, 'error');
  }
}

export function* getExpenseListSaga(
  action: any,
): Generator<any, void, unknown> {
  console.log(action, 'action');
  try {
    const response = yield call(getExpense, { data: action.group_id });
  
    yield put(expenseActions.setExpense(response.data.response));
  } catch (err) {
    console.log(err, 'error');
  }
}
