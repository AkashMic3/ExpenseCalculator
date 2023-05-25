import createReducer from 'app/lib/createReducer';
import { ILoading } from 'app/models/reducers/loading';
import * as types from 'app/store/actions/types';

const initialState = {};
export const HomeReducer = createReducer(initialState, {
  [types.FetchEmployees](state: any)
  {
    console.log('inside Fetch')
    return { ...state };
  },
  [types.FetchEmployeesResponse](state: any, action: any) {
    return { ...state, employeeList: { action } };
  },
});
