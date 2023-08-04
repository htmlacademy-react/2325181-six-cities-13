import { OffersType } from './types/types';

export const AppPath = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id',
  NotFound: '*',
} as const;

export const AuthorisationStatus = {
  Auth: 'AUTH',
  NoAuth: 'NO_AUTH',
  Unknown: 'UNKNOWN'
} as const;

export const StarRatings = [
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

export const AVATAR_URL = 'https://i.pravatar.cc/128';

export const Locations = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Brussels: 'Brussels',
  Amsterdam: 'Amsterdam',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf'
} as const;

export const LodgingKinds = {
  Room: 'Room',
  Aparment: 'Apartment',
  House: 'House',
  Hotel: 'Hotel'
} as const;

export const PlaceCardDesign = {
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
  },
  [AppPath.Offer]: {
    cardClass: 'near-places',
    cardInfoClass: '',
    cardWidth: '260',
    cardHeight: '200'
  }
} as const;

export const PremiumPrefix = {
  Offer: 'offer',
  PlaceCard: 'place-card'
} as const;

export const ReviewValidationParameters = {
  MinLength: 50,
  MaxLength: 300,
} as const;

export const LogoSizes = {
  Width : {
    footer: '64',
    header: '81'
  },
  Height: {
    footer: '33',
    header: '41'
  }
} as const;

export const URL_MARKER_DEFAULT = '../../img/pin.svg';

export const URL_MARKER_CURRENT = '../../img/pin-active.svg';

export const IconDesign = {
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
} as const;

export const LocationsCoordinates = {
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
} as const;

export const LOCATION_ZOOM = 12;

export const TILE_LAYER_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

export const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export const MAX_REVIEWS_QUANTITY = 10;

export const MapDesign = {
  [AppPath.Main]:{
    classAdded: 'cities__map map',

  },
  [AppPath.Offer]: {
    classAdded: 'offer__map map',
    style: {
      width: '1144px',
      height: '579px',
      margin: '0 auto 20px auto',
    }
  }
} as const;

export const REVIEW_DATE_FORMAT = 'MMMM YYYY';

export const RATING_WIDTH_UNIT = 20;

export const NameSpace = {
  Location: 'location',
  Offers: 'offers',
  OfferId: 'offer',
  Sorting: 'sorting'
} as const;

export const Action = {
  Add: 'add',
  Delete: 'delete',
  Get: 'get',
  Update: 'update',
  Set: 'set',
  Load: 'load'
} as const;

export const SortOrders = {
  Popular: {
    order: 'Popular',
    title: 'Popular',
    callback: (offers: OffersType) => offers.slice()
  },
  PriceAscending: {
    order: 'PriceAscending',
    title: 'Price: low to high',
    callback: (offers: OffersType) => offers.slice().sort((offerA, offerB) => offerA.price - offerB.price)
  },
  PriceDescending: {
    order: 'PriceDescending',
    title: 'Price: high to low',
    callback: (offers: OffersType) => offers.slice().sort((offerA, offerB) => offerB.price - offerA.price)
  },
  RatedFirst: {
    order: 'RatedFirst',
    title: 'Top rated first',
    callback: (offers: OffersType) => offers.slice().sort((offerA, offerB) => offerB.rating - offerA.rating)
  }
} as const;

export const DEFAULT_SORT_ORDER = 'Popular';

export const BASE_URL = 'https://13.design.pages.academy/six-cities';

export const REQUEST_TIMEOUT = 5000;

export const AUTH_TOKEN_KEY = '6-cities-token';

export const APIPath = {
  Offers: '/offers',
  Reviews: '/reviews',
};
