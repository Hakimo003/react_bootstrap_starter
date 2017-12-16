import axios from 'axios';
import API_URL from './ApiConfig';

const RoleAPIRoute = `${API_URL}Role/`;


export function getRoles() {
  return axios.get(RoleAPIRoute);
}
