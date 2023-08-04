import {configureStore} from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { createApi } from '../services/api';

const axiosApi = createApi();
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: axiosApi,
      },
    }),
});
