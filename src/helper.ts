import { IconDesign, RATING_WIDTH_UNIT, SortOrders } from './const';
import { ActiveSortOrderType, OfferType, OffersType } from './types/types';

export const getRatingWidth = (rating: number): string => `${rating * RATING_WIDTH_UNIT}%`;

export const getRandomNumber = (min: number, max: number): number => {
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

export const validateOfferPage = (page: string): boolean => RegExp('/offer/.*').test(page);

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
