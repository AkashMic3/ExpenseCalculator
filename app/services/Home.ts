import ApiConfig from 'app/config/api-config';
import { apiClient } from './client';

export default  function getUsers() {
  return apiClient.get(ApiConfig.getEmployees);
}
