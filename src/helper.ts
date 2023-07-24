import { IconDesign } from './const';

const getRatingWidth = (rating: number): string => `${rating * 20}%`;

const getRandomNumber = (min: number, max: number): number => {
  const from = Math.ceil(Math.min(min, max));
  const till = Math.floor(Math.max(min, max));
  const result = Math.random() * (till - from + 1) + from;
  return Math.floor(result);
};

function getRandomArrayElement<T> (arrayInput: T[]): T {
  return arrayInput[getRandomNumber(0, arrayInput.length - 1)];
}

const getIconObject = (url: string): object => Object.assign({iconUrl: url}, {...IconDesign});

export { getRatingWidth, getRandomArrayElement, getIconObject };
