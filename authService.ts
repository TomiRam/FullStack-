import axios from 'axios';
import jwt_decode,{jwtDecode} from 'jwt-decode';

const API_URL = 'http://localhost:8000/api/token/';

export const login = async (username: string, password: string) => {
  const response = await axios.post(API_URL, { username, password });
  if (response.data.access) {
    localStorage.setItem('access_token', response.data.access);
    localStorage.setItem('refresh_token', response.data.refresh);
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
};

export const getAccessToken = () => {
  return localStorage.getItem('access_token');
};

export const getRefreshToken = () => {
  return localStorage.getItem('refresh_token');
};

export const isAuthenticated = () => {
  const token = getAccessToken();
  if (token) {
    const decoded: any = jwtDecode(token);
    return decoded.exp > Date.now() / 1000;
  }
  return false;
};
export const refreshToken = async () => {
  const refresh_token = getRefreshToken();
  if (refresh_token) {
    const response = await axios.post(`${API_URL}refresh/`, { refresh: refresh_token });
    if (response.data.access) {
      localStorage.setItem('access_token', response.data.access);
    }
    return response.data;
  }
  return null;
};