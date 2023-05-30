/*
 * Reducer actions related with login
 */
import * as types from './types';
import { ILoginResponse } from 'app/models/api/login';

export function requestLogin(email: string, password: string) {
  console.log('inside actions');
  return {
    type: types.LOGIN_REQUEST,
    email,
    password,
  };
}

export function requestRegsiter({name, email, phone, password}:any) {
  console.log('inside actions register');
  return {
    type: types.REGISTER_REQUEST,
    name,
    email,
    phone,
    password,
  };
}

export function loginFailed() {
  return {
    type: types.LOGIN_FAILED,
  };
}

export function onLoginResponse(response: ILoginResponse) {
  return {
    type: types.LOGIN_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.LOGIN_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.LOGIN_DISABLE_LOADER,
  };
}

export function logOut() {
  return {
    type: types.LOG_OUT,
  };
}
