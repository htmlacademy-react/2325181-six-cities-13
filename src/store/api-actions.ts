import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { generatePath} from 'react-router-dom';
import { AppDispatchType, OffersType, UserDataType, AuthDataType, OfferType, ReviewsType, ReviewType, ReviewFormType, StateType, FavoriteStatusType, LoginType } from '../types/types';
import { APIPath, Action, AuthorisationStatus, NameSpace, TIMEOUT_SHOW_ERROR, AppPath, OFFERS_NEARBY_COUNT } from '../const';
import { redirectToRoute } from './action';
import { setToken, removeToken } from '../services/token';
import { setError } from './error/error-slice';
import { loadOfferDetails } from './offer-details/offer-details-slice';
import { loadReviewsList } from './reviews/reviews-slice';
import { loadOffersNearby } from './offers-nearby/offers-nearby-slice';
import { addComment } from './reviews/reviews-slice';
import { setEmail, updateAuthorisationStatus } from './user/user-slice';

export const clearErrorAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatchType;
  }
>(
  `${NameSpace.Error}/${Action.Delete}`,
  (_, {dispatch}) => {
    setTimeout(
      () => dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);


export const loadOffersAction = createAsyncThunk<OffersType, undefined, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
  }
>
(
  `${NameSpace.Offers}/${Action.Load}`,
  async (_arg, {extra: axiosApi}) => {
    const {data} = await axiosApi.get<OffersType>(APIPath.Offers);
    return data;
  },
);

export const loadFavoritesAction = createAsyncThunk<OffersType, undefined, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
  }
>
(
  `${NameSpace.Favorites}/${Action.Load}`,
  async (_arg, {extra: axiosApi}) => {
    const {data} = await axiosApi.get<OffersType>(APIPath.Favorite);
    return data;
  },
);

export const loadOfferDetailsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
  }
>
(
  `${NameSpace.OfferDetails}/${Action.Load}`,
  async (offerId, {dispatch, extra: axiosApi}) => {
    const {data} = await axiosApi.get<OfferType>(generatePath(APIPath.OfferId, {offerId: offerId}));
    dispatch(loadOfferDetails(data));
  },
);

export const loadOffersNearbyAction = createAsyncThunk<void, string, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
  }
>
(
  `${NameSpace.OffersNearby}/${Action.Load}`,
  async (offerId, {dispatch, extra: axiosApi}) => {
    const {data} = await axiosApi.get<OffersType>(generatePath(APIPath.OffersNearby, {offerId: offerId}));
    dispatch(loadOffersNearby(data.slice(0, OFFERS_NEARBY_COUNT)));
  },
);

export const loadReviewsListAction = createAsyncThunk<void, string, {
  dispatch: AppDispatchType;
  state: StateType;
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


export const updateAuthStatusAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
  }
>
(
  `${NameSpace.AuthorisationStatus}/${Action.Update}`,
  async (_arg, {dispatch, extra: axiosApi}) => {
    try {
      const {data} = await axiosApi.get<LoginType>(APIPath.Login);
      dispatch(updateAuthorisationStatus(AuthorisationStatus.Auth));
      dispatch(setEmail(data.email));
    } catch {
      dispatch(updateAuthorisationStatus(AuthorisationStatus.NoAuth));
    }
  },
);

export const loginUserAction = createAsyncThunk<void, AuthDataType, {
  dispatch: AppDispatchType;
  state: StateType;
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
    dispatch(loadOffersAction());
    dispatch(loadFavoritesAction());
    dispatch(redirectToRoute(AppPath.Main));
  },
);

export const postReviewAction = createAsyncThunk<void, ReviewFormType, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
  }
>
(
  `${NameSpace.Review}/${Action.Add}`,
  async ({id, comment, rating}, {dispatch, extra: axiosApi}) => {
    const {data} = await axiosApi.post<ReviewType>(generatePath(APIPath.Reviews, {offerId: id}), {comment, rating});
    dispatch(addComment(data));
  },
);

export const addBookmarkAction = createAsyncThunk<OfferType, FavoriteStatusType, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
  }
>
(
  `${NameSpace.Favorites}/${Action.Update}`,
  async ({id, status}, { dispatch, extra: axiosApi}) => {
    const {data} = await axiosApi.post<OfferType>(`${APIPath.Favorite}/${id}/${status}`);
    dispatch(loadFavoritesAction());
    return data;
  },
);

export const logoutUserAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
  }
>
(
  `${NameSpace.AuthorisationStatus}/${Action.Logout}`,
  async (_arg, {dispatch, extra: axiosApi}) => {
    await axiosApi.delete(APIPath.Logout);
    removeToken();
    dispatch(updateAuthorisationStatus(AuthorisationStatus.NoAuth));
    dispatch(redirectToRoute(AppPath.Login));
  },
);
