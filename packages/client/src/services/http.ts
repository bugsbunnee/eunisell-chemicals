import axios from 'axios';
import { getUser } from './auth';

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

http.interceptors.request.use(
  async (config) => {
    const user = getUser();
    if (user) config.headers['x-auth-token'] = user.token;

    return config;
  },
  (error) => Promise.reject(error)
);

export default http;
