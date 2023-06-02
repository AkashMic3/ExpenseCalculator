import { Expense } from 'app/models/interfaces';
import * as types from './types';

export function AddExpenseForGroup(requestData: Expense) {
  return {
    type: types.ADD_EXPENSE,
    requestData,
  };
}

export function fetchExpense(group_id: string) {
  return {
    type: types.FETCH_EXPENSES,
    group_id,
  };
}
export function setExpense(data: [Expense]) {
  return {
    type: types.SET_EXPENSE,
    data,
  };
}
