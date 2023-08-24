import { Action } from '@reduxjs/toolkit';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { createApi } from '../services/api';
import { store } from '../store';
import { AuthorisationStatus, Location, LodgingKind, PremiumPrefix, SortOrders, AppPath, RequestStatus, PlaceCardDesign } from '../const';

export type AuthorisationStatusType = typeof AuthorisationStatus[keyof typeof AuthorisationStatus];

export type LocationType = typeof Location[keyof typeof Location];

export type LodgingType = typeof LodgingKind[keyof typeof LodgingKind];

export type OffersType = OfferType[];

export type OfferType = {
  id: string;
  title: string;
  type: LodgingType;
  price: number;
  previewImage: string;
  city: {
    name: LocationType;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string [];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: string [];
  maxAdults: number;
};

export type ReviewType = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
}

export type ReviewsType = ReviewType [];

export type PremiumPrefixType = typeof PremiumPrefix[keyof typeof PremiumPrefix];

export type LocationReducerType = {
  [name: string]: OffersType;
};

export type OfferCoordinatesType = {
  id: string;
  latitude: number;
  longitude: number;
}

export type AppDispatchType = typeof store.dispatch;

export type ActiveSortOrderType = typeof SortOrders[keyof typeof SortOrders]['order'];

export type Token = string;

export type UserDataType = {
  email: string;
  password: string;
  token: Token;
}

export type AuthDataType = Omit<UserDataType, 'token'>;

export type AppPathType = typeof AppPath[keyof typeof AppPath];

export type RequestStatusType = typeof RequestStatus[keyof typeof RequestStatus];

export type ReviewFormType = {
  id: string | null;
  comment: string;
  rating: number;
}

export type StateType = ReturnType<typeof store.getState>;

export type FavoriteStatusType = {
  id: string;
  status: number;
}

export type CardClassType = typeof PlaceCardDesign[keyof typeof PlaceCardDesign]['cardClass'];

export type LoginType = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
  };

export type AppThunkDispatchType = ThunkDispatch<StateType, ReturnType<typeof createApi>, Action>;
