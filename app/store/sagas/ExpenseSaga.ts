import { AddExpense } from 'app/services/Expense';
import { call } from 'redux-saga/effects';

export function* ExpenseSaga(action: any): Generator<any, void, unknown> {
  console.log(action, 'action');
  try {
    const response = yield call(AddExpense, { data: action.requestData });
    console.log(response, 'response');
  } catch {
     console.log(err, 'error');
  }
}
