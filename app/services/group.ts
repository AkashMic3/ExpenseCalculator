import ApiConfig from 'app/config/api-config';
import { apiClient } from './client';

export async function getMembers(payload: any) {
  return await apiClient.post(
    ApiConfig.BASE_URL + ApiConfig.GET_GROUP_MEMBERS,
    {
      ...payload,
    },
  );
}
