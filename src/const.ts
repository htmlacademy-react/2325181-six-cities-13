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
  Room: 'Room',
  Aparment: 'Apartment',
  House: 'House',
  Hotel: 'Hotel'
} as const;

const PlaceCardDesign = {
  [AppPath.Favorites]: {
    cardClass: 'favorites',
    cardInfoClass: 'favorites__card-info',
    cardWidth: '150',
    cardHeight: '110'
  },
  [AppPath.Main]: {
    cardClass: 'cities',
    cardInfoClass: '',
    cardWidth: '260',
    cardHeight: '200'
  }
};

const PremiumPrefix = {
  Offer: 'offer',
  PlaceCard: 'place-card'
} as const;

const ReviewValidationParameters = {
  MinLength: 50,
  MaxLength: 300,
};

const LogoSizes = {
  Width : {
    footer: '64',
    header: '81'
  },
  Height: {
    footer: '33',
    header: '41'
  }
};

const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

const IconDesign = {
  iconSize: [40, 40],
  iconAnchor: [20, 40]
};

const LocationsCoordinates = {
  [Locations.Paris]: {
    latitude: 48.85661,
    longitude: 2.351499
  },
  [Locations.Cologne]: {
    latitude: 50.938361,
    longitude: 6.959974
  },
  [Locations.Brussels]: {
    latitude: 50.846557,
    longitude: 4.351697
  },
  [Locations.Amsterdam]: {
    latitude: 52.37454,
    longitude: 4.897976
  },
  [Locations.Hamburg]: {
    latitude: 53.550341,
    longitude: 10.000654
  },
  [Locations.Dusseldorf]: {
    latitude: 51.225402,
    longitude: 6.776314
  }
};


export {AppPath, AuthorisationStatus, StarRatings, AVATAR_URL, Locations, LodgingKinds, PlaceCardDesign, PremiumPrefix, ReviewValidationParameters, LogoSizes, URL_MARKER_CURRENT, URL_MARKER_DEFAULT, IconDesign, LocationsCoordinates};
