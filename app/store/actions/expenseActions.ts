import { Expense } from 'app/models/interfaces';
import * as types from './types';

export function AddExpenseForGroup(requestData: Expense) {
  return {
    type: types.ADD_EXPENSE,
    requestData,
  };
}

export function fetchExpense(group_id: string, userId: string) {
  return {
    type: types.FETCH_EXPENSES,
    group_id,
    userId,
  };
}
export function setExpense(data: [Expense]) {
  return {
    type: types.SET_EXPENSE,
    data,
  };
}
