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

export function updateExpenseStatus(
  expense_id: string,
  user_id: string,
  payment_status: boolean,
  owner_id: string,
  group_id: string,
) {
  return {
    type: types.UPDATE_EXPENSE_STATUS,
    expense_id: expense_id,
    user_id: user_id,
    payment_status: payment_status,
    owner_id: owner_id,
    group_id: group_id,
  };
}
export function deleteExpensess(id: string) {
  return {
    type: types.DELETE_EXPENSE,
    id,
  };
}
