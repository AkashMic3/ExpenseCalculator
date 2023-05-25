import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  responseType: 'json',
  // withCredentials: true,
});

export { apiClient };
