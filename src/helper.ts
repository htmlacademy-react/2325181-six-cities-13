import { IconDesign } from './const';
import { OfferType } from './types/types';

export const getRatingWidth = (rating: number): string => `${rating * 20}%`;

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
