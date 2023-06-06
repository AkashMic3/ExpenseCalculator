export interface IGroupRequestState {
  type: String;
  user_id: string;
}

export interface Member {
  name: string;
  user_id: string;
}

interface IResponse {
  _id: string;
  group_name: string;
  members: Member;
  owner_id: string;
  created_at: string;
}

export interface IGroupResponseState {
  type: String;
  response: IResponse[];
}

export interface member {
  name: string;
  user_id: string;
}
