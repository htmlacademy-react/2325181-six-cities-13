import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios';
import { store } from '../store/store';
import { clearErrorAction } from '../store/api-actions';
import { getToken } from './token';
import { BASE_URL, REQUEST_TIMEOUT, StatusCodeMapping } from '../const';


type DetailMessageType = {
  type: string;
  message: string;
}

const shouldDisplayError = (response: AxiosResponse): boolean => Boolean(StatusCodeMapping[response.status]);

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

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const detailMessage = (error.response.data);
        store.dispatch(clearErrorAction(detailMessage.message));
      }

      throw error;
    }
  );

  return api;
};
