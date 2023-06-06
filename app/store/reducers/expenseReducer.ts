import createReducer from 'app/lib/createReducer';
import { IExpense } from 'app/models/reducers/expense';

import * as types from 'app/store/actions/types';
const initialState: IExpense = {
  expenses: [],
};

export const expenseReducer = createReducer(initialState, {
  // [types.ADD_EXPENSE](state: IExpense) {
  //   return { ...state };
  // },
  // [types.FETCH_EXPENSES](state: IExpense) {
  //   return { ...state };
  // },
  [types.SET_EXPENSE](state: IExpense, action: any) {
    console.log(action, 'action');
    return { ...state, ExpenseList: action.data };
  },
  [types.DELETE_EXPENSE](state: IExpense, action: any) {
    console.log(action, 'action');
    return { ...state };
  },
});
