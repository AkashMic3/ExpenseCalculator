import * as types from './types';

export function addExpense(group_id: string,expense_name:string, members: [any], owner_id:string, created_at:string, amount:number) {
    return {
      type: types.ADD_EXPENSE,
      group_id,
      expense_name,
      members,
      owner_id,
      amount,
      created_at
    };
  }
  

  export function fetchGroups(group_id:string) {
    return {
      type: types.FETCH_EXPENSES,
      group_id
    };
  }
  