import { apiClient } from 'app/services/client';
import ApiConfig from 'app/config/api-config';

export  function loginUser(username: string, password: string) {
  return apiClient.post(ApiConfig.LOGIN, { username, password });
}


export  function registerUser(payload:any) {
  return apiClient.post(ApiConfig.BASE_URL + ApiConfig.REGISTER_USER, {...payload});
}

export function getUserInfo(payload:any) {
  return apiClient.post(ApiConfig.BASE_URL + ApiConfig.GET_USER_INFO, {...payload});
}
