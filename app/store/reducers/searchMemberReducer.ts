import createReducer from 'app/lib/createReducer';
import { IGroupResponseState } from 'app/models/actions/group';
import { IGroup } from 'app/models/reducers/group';
import * as types from 'app/store/actions/types';

const initialState: any = {
  members: [],
};

export const searchMembersReducer = createReducer(initialState, {
  [types.FETCH_USERS_BY_PARAM_RESPONSE](state: any, action: any) {
    return { ...state, members: action.response };
  },
   
});
