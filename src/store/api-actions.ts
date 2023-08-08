import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { generatePath } from 'react-router-dom';
import { InitialStateType } from './reducer';
import { AppDispatchType, OffersType, UserDataType, AuthDataType, OfferType, ReviewsType } from '../types/types';
import { APIPath, Action, AuthorisationStatus, NameSpace, TIMEOUT_SHOW_ERROR, AppPath, OFFERS_NEARBY_COUNT } from '../const';
import { loadOfferDetails, loadOffers, loadOffersNearby, loadReviewsList, redirectToRoute, setDataLoadingStatus, setEmail, setError, updateAuthorisationStatus } from './action';
import { setToken, removeToken } from '../services/token';
import { store } from '.';

export const clearErrorAction = createAsyncThunk(
  `${NameSpace.Error}/${Action.Delete}`,
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);


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
    const {data} = await axiosApi.get<OfferType>(generatePath(APIPath.OfferId, {offerId: offerId}));
    dispatch(loadOfferDetails(data));
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
  async (offerId, {dispatch, extra: axiosApi}) => {
    const {data} = await axiosApi.get<ReviewsType>(generatePath(APIPath.Reviews, {offerId: offerId}));
    dispatch(loadReviewsList(data));
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
    const {data} = await axiosApi.get<OffersType>(generatePath(APIPath.OffersNearby, {offerId: offerId}));
    dispatch(loadOffersNearby(data.slice(0, OFFERS_NEARBY_COUNT)));
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

export const loginUserAction = createAsyncThunk<void, AuthDataType, {
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
    dispatch(setEmail(email));
    dispatch(redirectToRoute(AppPath.Favorites));
  },
);

export const logoutUserAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatchType;
  state: InitialStateType;
  extra: AxiosInstance;
  }
>
(
  `${NameSpace.AuthorisationStatus}/${Action.Logout}`,
  async (_arg, {dispatch, extra: axiosApi}) => {
    await axiosApi.delete(APIPath.Logout);
    removeToken();
    dispatch(updateAuthorisationStatus(AuthorisationStatus.NoAuth));

  },
);
