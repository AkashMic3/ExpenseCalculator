import createReducer from 'app/lib/createReducer';
import { IExpense } from 'app/models/reducers/expense';
import { IGroup } from 'app/models/reducers/group';

const initialState: IExpense = {
    expenses:[]
};

export const groupReducer = createReducer(initialState, {
 
});
