import createReducer from 'app/lib/createReducer';
import { IGroup } from 'app/models/reducers/group';
import * as types from 'app/store/actions/types';

const initialState: IGroup = {
  groups: [],
};

export const groupReducer = createReducer(initialState, {
  [types.ADD_GROUP](state: IGroup, action: IGroup) {
    return { ...state, isLoginLoading: true };
  },
  [types.FetchGroupMembers](state: IGroup, action: any) {
    console.log(action,"ghghg");
    return { ...state, isLoginLoading: true };
  },
  [types.FETCH_GROUPS](state: IGroup, action: IGroup) {
    return {
      ...state,
      groups: action.response.expenses,
    };
  },
});
