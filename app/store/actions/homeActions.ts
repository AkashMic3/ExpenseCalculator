import * as types from './types';

export function FetchEmployees() {
  return {
    type: types.FetchEmployees,
  };
}
export function Fetchres(data) {
  return {
    type: types.FetchEmployeesResponse,
    data,
  };
}
