export interface Member {
    name:string,
    user_id:string
}


export interface Group {
    _id: string;
    group_name:string;
    members:Member[],
    owner_id:string,
    created_at:string
  }
 
  export interface IGroup {
    groups:Group[]
  }

