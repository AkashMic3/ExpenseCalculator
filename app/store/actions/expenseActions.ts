import { Expense } from 'app/models/interfaces';
import * as types from './types';

export function AddExpenseForGroup(requestData: Expense) {
  return {
    type: types.ADD_EXPENSE,
    requestData,
  };
}

export function fetchGroups(group_id: string) {
  return {
    type: types.FETCH_EXPENSES,
    group_id,
  };
}
