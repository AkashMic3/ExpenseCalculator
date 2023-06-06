import createReducer from 'app/lib/createReducer';
import { IGroupResponseState } from 'app/models/actions/group';
import { IGroup } from 'app/models/reducers/group';
import * as types from 'app/store/actions/types';

const initialState: IGroup = {
  groups: [],
};

export const groupReducer = createReducer(initialState, {
  [types.FetchGroupMembers](state: IGroup, action: any) {
    return { ...state, isLoginLoading: true };
  },
  [types.ADD_GROUP](state: IGroup, action: IGroup) {
    return { ...state, isLoginLoading: true };
  },
  [types.FETCH_GROUPS_RESPONSE](state: IGroup, action: IGroupResponseState) {
    return {
      ...state,
      groups: action.response,
    };
  },
  [types.SET_MEMBERS](state: IGroup, action: any) {
    console.log(action, 'members');
    return {
      ...state,
      members: action.members,
    };
  },
});
