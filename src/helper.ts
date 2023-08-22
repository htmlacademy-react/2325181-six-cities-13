import { FormValidation, IconDesign, RATING_WIDTH_UNIT, RequestStatus, SortOrders, PASSWORD_REGEX, AppPath } from './const';
import { ActiveSortOrderType, AppPathType, LodgingType, OfferType, OffersType, RequestStatusType } from './types/types';

export const getRatingWidth = (rating: number | null | undefined): string => {
  const correctRating = rating ?? 0;
  if (correctRating >= 0 && correctRating <= 5) {
    return `${Math.round(correctRating) * RATING_WIDTH_UNIT}%`;
  }
  return '0%';
};

const getRandomNumber = (min: number, max: number): number => {
  const from = Math.ceil(Math.min(min, max));
  const till = Math.floor(Math.max(min, max));
  const result = Math.random() * (till - from + 1) + from;
  return Math.floor(result);
};

export function getRandomArrayElement<T> (arrayInput: T[]): T {
  return arrayInput[getRandomNumber(0, arrayInput.length - 1)];
}

export const getIconObject = (url: string): object => Object.assign({iconUrl: url}, {...IconDesign});

export const getOffersCoordinates = (offers: OfferType[]) => offers.map((offer) => ({id: offer.id, latitude: offer.location.latitude, longitude: offer.location.longitude}));

export const sortOffers = (offers: OffersType, sortType: ActiveSortOrderType): OffersType => {
  switch (sortType) {
    case SortOrders.Popular.order:
      return offers?.slice();
      break;
    case SortOrders.PriceAscending.order:
      return offers?.slice().sort((offerA, offerB) => offerA.price - offerB.price);
      break;
    case SortOrders.PriceDescending.order:
      return offers?.slice().sort((offerA, offerB) => offerB.price - offerA.price);
      break;
    case SortOrders.RatedFirst.order:
      return offers?.slice().sort((offerA, offerB) => offerB.rating - offerA.rating);
      break;
    default:
      return offers?.slice();
  }

};

export const isValidForm = (text: string, rating: number): boolean => text.length > FormValidation.MinLength
  && text.length < FormValidation.MaxLength
  && rating >= FormValidation.MinRating
  && rating <= FormValidation.MaxRating;

export const isPending = (status: RequestStatusType) => status === RequestStatus.Pending;
export const isIdle = (status: RequestStatusType) => status === RequestStatus.Idle;
export const isFulfilled = (status: RequestStatusType) => status === RequestStatus.Fulfilled;
export const isRejected = (status: RequestStatusType) => status === RequestStatus.Rejected;

export const isPasswordValid = (pass: string): boolean => PASSWORD_REGEX.test(pass);

export const getFavoriteStatusCode = (isFavorite: boolean): number => isFavorite ? 1 : 0;

export const isLoginPage = (pathName: AppPathType) => pathName === AppPath.Login;

export const isMainPage = (pathName: AppPathType) => pathName === AppPath.Main;

export const isFavoritesPage = (pathName: AppPathType) => pathName === AppPath.Favorites;

export const getUpperCaseType = (type: LodgingType) => {
  if (type === undefined) {
    return;
  }
  return type.slice(0, 1).toUpperCase().concat(type.slice(1));
};

export const isPlural = (count: number) => count > 1;
