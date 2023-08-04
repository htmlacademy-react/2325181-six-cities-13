import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { InitialStateType } from './reducer';
import { AppDispatchType, OffersType } from '../types/types';
import { APIPath, Action, NameSpace } from '../const';
import { loadOffers } from './action';


export const loadOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatchType;
  state: InitialStateType;
  extra: AxiosInstance;
}
>(
  `${NameSpace.Offers}/${Action.Load}`,
  async (_arg, {dispatch, extra: axiosApi}) => {
    const {data} = await axiosApi.get<OffersType>(APIPath.Offers);
    dispatch(loadOffers(data));
  },
);
