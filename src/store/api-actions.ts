import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { InitialStateType } from './reducer';
import { AppDispatchType, OffersType, UserDataType, AuthDataType } from '../types/types';
import { APIPath, Action, AuthorisationStatus, NameSpace } from '../const';
import { loadOffers, setDataLoadingStatus, updateAuthorisationStatus } from './action';
import { setToken } from '../services/token';


export const loadOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatchType;
  state: InitialStateType;
  extra: AxiosInstance;
  }
>
(
  `${NameSpace.Offers}/${Action.Load}`,
  async (_arg, {dispatch, extra: axiosApi}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await axiosApi.get<OffersType>(APIPath.Offers);
    dispatch(setDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

export const updateAuthStatusAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatchType;
  state: InitialStateType;
  extra: AxiosInstance;
  }
>
(
  `${NameSpace.AuthorisationStatus}/${Action.Update}`,
  async (_arg, {dispatch, extra: axiosApi}) => {
    try {
      await axiosApi.get(APIPath.Login);
      dispatch(updateAuthorisationStatus(AuthorisationStatus.Auth));
    } catch {
      dispatch(updateAuthorisationStatus(AuthorisationStatus.NoAuth));
    }
  },
);

export const authoriseUserAction = createAsyncThunk<void, AuthDataType, {
  dispatch: AppDispatchType;
  state: InitialStateType;
  extra: AxiosInstance;
  }
>
(
  `${NameSpace.AuthorisationStatus}/${Action.Update}`,
  async ({email, password}, {dispatch, extra: axiosApi}) => {
    const {data: {token}} = await axiosApi.post<UserDataType>(APIPath.Login, {email, password});
    setToken(token);
    dispatch(updateAuthorisationStatus(AuthorisationStatus.Auth));
  },
);
