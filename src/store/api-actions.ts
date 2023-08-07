import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { generatePath } from 'react-router-dom';
import { InitialStateType } from './reducer';
import { AppDispatchType, OffersType, UserDataType, AuthDataType, OfferType, ReviewsType } from '../types/types';
import { APIPath, Action, AuthorisationStatus, NameSpace } from '../const';
import { loadOfferDetails, loadOffers, loadOffersNearby, loadReviewsList, setDataLoadingStatus, updateAuthorisationStatus } from './action';
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

export const loadOfferDetailsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatchType;
  state: InitialStateType;
  extra: AxiosInstance;
  }
>
(
  `${NameSpace.Offer}/${Action.Load}`,
  async (offerId, {dispatch, extra: axiosApi}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await axiosApi.get<OfferType>(generatePath(APIPath.OfferId, {offerId: offerId}));
    dispatch(loadOfferDetails(data));
    dispatch(setDataLoadingStatus(false));
  },
);

export const loadReviewsListAction = createAsyncThunk<void, string, {
  dispatch: AppDispatchType;
  state: InitialStateType;
  extra: AxiosInstance;
  }
>
(
  `${NameSpace.Reviews}/${Action.Load}`,
  async (offer, {dispatch, extra: axiosApi}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await axiosApi.get<ReviewsType>(generatePath(APIPath.Reviews, {offerId: offer}));
    dispatch(loadReviewsList(data));
    dispatch(setDataLoadingStatus(false));
  },
);

export const loadOffersNearbyAction = createAsyncThunk<void, string, {
  dispatch: AppDispatchType;
  state: InitialStateType;
  extra: AxiosInstance;
  }
>
(
  `${NameSpace.Offers}/${Action.Load}`,
  async (offerId, {dispatch, extra: axiosApi}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await axiosApi.get<OffersType>(generatePath(APIPath.OffersNearby, {offerId: offerId}));
    dispatch(loadOffersNearby(data));
    dispatch(setDataLoadingStatus(false));
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
