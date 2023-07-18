const AppPath = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id',
  NotFound: '*',
} as const;

const AuthorisationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN'
} as const;

const StarRatings = [
  {
    star: '5',
    description: 'perfect'
  },
  {
    star: '4',
    description: 'good'
  },
  {
    star: '3',
    description: 'not bad'
  },
  {
    star: '2',
    description: 'badly'
  },
  {
    star: '1',
    description: 'terribly'
  },
] as const;

const AVATAR_URL = 'https://i.pravatar.cc/128';

const Locations = [
  'Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'
] as const;

const OfferTypes = [
  'room', 'apartment', 'house', 'hotel'
] as const;

export {AppPath, AuthorisationStatus, StarRatings, AVATAR_URL, Locations, OfferTypes };
