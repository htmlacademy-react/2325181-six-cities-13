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

const Locations = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf'
} as const;

const LodgingKinds = {
  Room: 'room',
  Aparment: 'apartment',
  House: 'house',
  Hotel: 'hotel'
} as const;

const PlaceCardDesign = {
  favorites: {
    cardClass: 'favorites',
    cardInfoClass: 'favorites__card-info',
    cardWidth: '150',
    cardHeight: '110'
  },
  cities: {
    cardClass: 'cities',
    cardInfoClass: '',
    cardWidth: '260',
    cardHeight: '200'
  }
};

const CardFormat = {
  favorites: 'favorites',
  cities: 'cities'
} as const;

export {AppPath, AuthorisationStatus, StarRatings, AVATAR_URL, Locations, LodgingKinds, PlaceCardDesign, CardFormat };
