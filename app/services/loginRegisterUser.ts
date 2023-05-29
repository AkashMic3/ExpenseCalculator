import { apiClient } from 'app/services/client';
import ApiConfig from 'app/config/api-config';

export  function loginUser(username: string, password: string) {
  return apiClient.post(ApiConfig.LOGIN, { username, password });
}


export  function regsiterUser(email: string, phone: string, name:string) {
  return apiClient.post(ApiConfig.BASE_URL + ApiConfig.REGISTER_USER, { email, phone, name });
}
