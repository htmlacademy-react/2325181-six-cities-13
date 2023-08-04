import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import { getToken } from './token';
import { BASE_URL, REQUEST_TIMEOUT } from '../const';

export const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();
      if (token && config.headers) {
        config.headers['X-Token'] = token;
      }
      return config;
    },
  );

  return api;
};
