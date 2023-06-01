export interface ILoginResponse {
  isLoggedIn:boolean;
  id: string;
  name:string;
  email:string;
  phone:string;
}


export interface LoginState {
  loginReducer:ILoginResponse
}
