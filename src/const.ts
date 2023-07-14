const PLACE_CARD_NUMBER = 5;

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

export {PLACE_CARD_NUMBER, AppPath, AuthorisationStatus, StarRatings};
