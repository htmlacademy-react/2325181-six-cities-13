import {configureStore} from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import { createApi } from '../services/api';
import { redirect } from './middlewares/redirect';

const axiosApi = createApi();
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: axiosApi,
      },
    }).concat(redirect),
});
