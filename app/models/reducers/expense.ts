export interface Member {
    name:string,
    user_id:string,
    payment_status:boolean
}

export interface Expense {
    _id: string;
    group_id:string;
    expense_name:string,
    members:Member,
    amount:Number,
    owner_id:string,
    created_at:string
  }
 
  export interface IExpense {
    expenses:Expense[]
  }

