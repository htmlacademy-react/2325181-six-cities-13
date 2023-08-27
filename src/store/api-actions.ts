import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { generatePath} from 'react-router-dom';
import { AppDispatchType, OffersType, UserDataType, AuthDataType, OfferType, ReviewsType, ReviewType, ReviewFormType, StateType, FavoriteStatusType, LoginType } from '../types/types';
import { APIPath, Action, AuthorisationStatus, NameSpace, TIMEOUT_SHOW_ERROR, AppPath, OFFERS_NEARBY_COUNT, ErrorMessage } from '../const';
import { redirectToRoute } from './action';
import { setToken, removeToken } from '../services/token';
import { setError } from './error/error-slice';
import { loadOfferDetails } from './offer-details/offer-details-slice';
import { loadReviewsList } from './reviews/reviews-slice';
import { loadOffersNearby } from './offers-nearby/offers-nearby-slice';
import { addComment } from './reviews/reviews-slice';
import { setEmail, updateAuthorisationStatus } from './user/user-slice';


export const clearErrorAction = createAsyncThunk<void, string, {
  dispatch: AppDispatchType;
  }
>(
  `${NameSpace.Error}/${Action.Delete}`,
  (errorMessage, {dispatch}) => {
    setError(errorMessage);
    setTimeout(
      () => dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);


export const loadOffersAction = createAsyncThunk<OffersType | undefined, undefined, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
  }
>
(
  `${NameSpace.Offers}/${Action.Load}`,
  async (_arg, {dispatch, extra: axiosApi}) => {
    try {
      const {data} = await axiosApi.get<OffersType>(APIPath.Offers);
      return data;
    } catch {
      dispatch(clearErrorAction(ErrorMessage.FailedLoadOffers));
    }
  },
);

export const loadFavoritesAction = createAsyncThunk<OffersType | undefined, undefined, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
  }
>
(
  `${NameSpace.Favorites}/${Action.Load}`,
  async (_arg, {dispatch, extra: axiosApi}) => {
    try {
      const {data} = await axiosApi.get<OffersType>(APIPath.Favorite);
      return data;
    } catch {
      dispatch(clearErrorAction(ErrorMessage.FailedLoadFavorites));
    }
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
    try {
      const {data} = await axiosApi.get<OfferType>(generatePath(APIPath.OfferId, {offerId: offerId}));
      dispatch(loadOfferDetails(data));
    } catch {
      dispatch(clearErrorAction(ErrorMessage.FailedLoadOfferDetails));
    }
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
    try {
      const {data} = await axiosApi.get<OffersType>(generatePath(APIPath.OffersNearby, {offerId: offerId}));
      dispatch(loadOffersNearby(data.slice(0, OFFERS_NEARBY_COUNT)));
    } catch {
      dispatch(clearErrorAction(ErrorMessage.FailedLoadOffersNearby));
    }
  }
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
    try {
      const {data} = await axiosApi.get<ReviewsType>(generatePath(APIPath.Reviews, {offerId: offerId}));
      dispatch(loadReviewsList(data));
    } catch {
      dispatch(clearErrorAction(ErrorMessage.FailedLoadReviewsList));
    }
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
      dispatch(clearErrorAction(ErrorMessage.UserUnauthorised));
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
  `${NameSpace.User}/${Action.Login}`,
  async ({email, password}, {dispatch, extra: axiosApi}) => {
    try {
      const {data: {token}} = await axiosApi.post<UserDataType>(APIPath.Login, {email, password});
      setToken(token);
      dispatch(updateAuthorisationStatus(AuthorisationStatus.Auth));
      dispatch(setEmail(email));
      dispatch(redirectToRoute(AppPath.Main));
    } catch {
      dispatch(updateAuthorisationStatus(AuthorisationStatus.NoAuth));
      dispatch(clearErrorAction(ErrorMessage.FailedUserLogin));
    }
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
    try {
      const {data} = await axiosApi.post<ReviewType>(generatePath(APIPath.Reviews, {offerId: id}), {comment, rating});
      dispatch(addComment(data));
    } catch {
      dispatch(clearErrorAction(ErrorMessage.FailedPostReview));
      throw Error;
    }
  },
);

export const addBookmarkAction = createAsyncThunk<OfferType | undefined, FavoriteStatusType, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
  }
>
(
  `${NameSpace.Favorites}/${Action.Update}`,
  async ({id, status}, {dispatch, extra: axiosApi}) => {
    try {
      const {data} = await axiosApi.post<OfferType>(`${APIPath.Favorite}/${id}/${status}`);
      return data;
    } catch {
      dispatch(clearErrorAction(ErrorMessage.FailedAddBookmark));
    }
  },
);

export const logoutUserAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatchType;
  state: StateType;
  extra: AxiosInstance;
  }
>
(
  `${NameSpace.User}/${Action.Logout}`,
  async (_arg, {dispatch, extra: axiosApi}) => {
    try {
      await axiosApi.delete(APIPath.Logout);
      removeToken();
      dispatch(updateAuthorisationStatus(AuthorisationStatus.NoAuth));
    } catch {
      dispatch(clearErrorAction(ErrorMessage.FailedUserLogout));
    }
  },
);
