const PLACE_CARD_NUMBER = 5;

const AppPaths = {
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

export {PLACE_CARD_NUMBER, AppPaths, AuthorisationStatus};
