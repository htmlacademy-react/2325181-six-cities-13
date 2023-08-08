import {configureStore} from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { createApi } from '../services/api';
import { redirect } from './middlewares/redirect';

const axiosApi = createApi();
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: axiosApi,
      },
    }).concat(redirect),
});
