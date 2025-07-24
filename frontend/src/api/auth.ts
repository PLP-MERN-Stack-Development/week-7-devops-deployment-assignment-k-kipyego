import axios from 'axios';
import { LoginCredentials, RegisterCredentials, AuthResponse } from '../types/auth';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const authApi = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  const response = await authApi.post('/auth/login', credentials);
  return response.data;
};

export const register = async (credentials: RegisterCredentials): Promise<AuthResponse> => {
  const response = await authApi.post('/auth/register', credentials);
  return response.data;
};

// Add auth token to requests
export const setAuthToken = (token: string | null) => {
  if (token) {
    authApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete authApi.defaults.headers.common['Authorization'];
  }
};

export default authApi; 