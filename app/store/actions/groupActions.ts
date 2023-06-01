import * as types from './types';



export function addGroup(group_name: string, members: [any], owner_id:string, created_at:string) {
    return {
      type: types.ADD_GROUP,
      group_name,
      members,
      owner_id,
      created_at
    };
  }
  

  export function fetchGroups(user_id:string) {
    return {
      type: types.FETCH_GROUPS,
      user_id
    };
  }
  