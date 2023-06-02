export interface Expense {
  group_id: string;
  expense_name: string;
  members: Member[];
  owner_id: string;
  amount: number;
  created_at: string;
}

interface Member {
  name: string;
  user_id: string;
  payment_status: boolean;
}
