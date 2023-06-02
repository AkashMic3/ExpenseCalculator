import ApiConfig from 'app/config/api-config';
import { apiClient } from './client';

export async function AddExpense(payload: any) {
  console.log('payload', payload);
  return await apiClient.post(ApiConfig.BASE_URL + ApiConfig.ADD_EXPENSE, {
    ...payload.data,
  });
}
export async function getExpense(payload: any) {
  console.log('payload.....', payload, payload.data);

  return await apiClient.post(ApiConfig.BASE_URL + ApiConfig.GET_EXPENSE, {
    ...payload.data,
  });
}
