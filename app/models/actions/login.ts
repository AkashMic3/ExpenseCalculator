export interface ILoginRequestState {
  type: String;
  email: string;
  password: string;
}

interface IResponse {
  email: any;
  id: string;
  name:string;
  phone:string
}

export interface ILoginResponseState {
  type: String;
  response: IResponse;
}
