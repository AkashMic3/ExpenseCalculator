import { member } from 'app/models/actions/group';
import * as types from './types';
import { Expense } from 'app/models/interfaces';

export function fetchGroupMembers(group_Id: string) {
  return {
    type: types.FetchGroupMembers,
    group_Id,
  };
}

export function addGroup(
  group_name: string,
  members: [any],
  owner_id: string,
  created_at: string,
) {
  return {
    type: types.ADD_GROUP,
    group_name,
    members,
    owner_id,
    created_at,
  };
}

export function fetchGroups(user_id: string) {
  return {
    type: types.FETCH_GROUPS,
    user_id,
  };
}

export function onfetchGroupResponse(response: any) {
  console.log('fetch group response:', response);
  return {
    type: types.FETCH_GROUPS_RESPONSE,
    response,
  };
}

export function setGroupMembers(members: [member]) {
  console.log(members, 'members');
  return {
    type: types.SET_MEMBERS,
    members,
  };
}




