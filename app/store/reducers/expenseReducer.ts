import createReducer from 'app/lib/createReducer';
import { IExpense } from 'app/models/reducers/expense';

import * as types from 'app/store/actions/types';
const initialState: IExpense = {
  expenses: [],
};

export const expenseReducer = createReducer(initialState, {
  [types.ADD_EXPENSE](state: IExpense) {
    return { ...state };
  },
  [types.FETCH_EXPENSES](state: IExpense, action: ILoginResponseState) {
    return { ...state };
  },
});
