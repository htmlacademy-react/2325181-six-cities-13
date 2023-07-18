import { AuthorisationStatus, Locations, OfferTypes } from '../const';

export type AuthorisationStatusType = {
  authorisationStatus: typeof AuthorisationStatus[keyof typeof AuthorisationStatus];
};

export type Locations = Location[];

export type Location = typeof Locations[number];

export type OfferTypes = OfferType[];

export type OfferType = typeof OfferTypes[number];

export type Offers = Offer[];

export type Offer = {
  id: string;
  title: string;
  type: OfferType;
  price: number;
  previewImage: string;
  city: {
    name: Location;
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

export type Review = {
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

export type Reviews = Review [];
