import { store } from '../store';
import { AuthorisationStatus, Locations, LodgingKinds, PremiumPrefix, MapDesign, SortOrders } from '../const';

export type AuthorisationStatusType = typeof AuthorisationStatus[keyof typeof AuthorisationStatus];

export type LocationType = typeof Locations[keyof typeof Locations];

export type LodgingType = typeof LodgingKinds[keyof typeof LodgingKinds];

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

export type MapPageType = keyof typeof MapDesign;

export type StateType = ReturnType<typeof store.getState>;

export type AppDispatchType = typeof store.dispatch;

export type ActiveSortOrderType = typeof SortOrders[keyof typeof SortOrders]['order'];

export type Token = string;

export type UserDataType = {
  email: string;
  password: string;
  token: Token;
}

export type AuthDataType = Omit<UserDataType, 'token'>;
