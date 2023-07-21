import { PlaceCardDesign, AuthorisationStatus, Locations, LodgingKinds, PremiumPrefix } from '../const';

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

export type ChangeLocationType = (location: LocationType) => void;

export type PlaceCardDesignType = keyof typeof PlaceCardDesign;

export type LocationReducerType = {
  [name: string]: OffersType;
};
