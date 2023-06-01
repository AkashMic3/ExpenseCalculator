import { apiClient } from 'app/services/client';
import ApiConfig from 'app/config/api-config';


export function getGroups(user_id:string) {
    return apiClient.post(ApiConfig.BASE_URL + ApiConfig.GET_GROUPS, {user_id});
  }