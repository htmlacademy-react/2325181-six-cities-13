import { CSSProperties } from 'react';
import { StatusCodes } from 'http-status-codes/build/cjs/status-codes';

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
  OffersNearby: 'offersNearby',
  OfferId: 'offer',
  Sorting: 'sorting',
  LoadingStatus: 'loading',
  AuthorisationStatus: 'authorisation',
  User: 'user',
  Offer: 'offer',
  Reviews: 'reviews',
  Error: 'error',
  Route: 'route',
  Email:'email'
} as const;

export const Action = {
  Add: 'add',
  Delete: 'delete',
  Get: 'get',
  Update: 'update',
  Set: 'set',
  Load: 'load',
  Login: 'login',
  Logout: 'logout',
  Redirect: 'redirect'
} as const;

export const SortOrders = {
  Popular: {
    order: 'Popular',
    title: 'Popular',
  },
  PriceAscending: {
    order: 'PriceAscending',
    title: 'Price: low to high',
  },
  PriceDescending: {
    order: 'PriceDescending',
    title: 'Price: high to low',
  },
  RatedFirst: {
    order: 'RatedFirst',
    title: 'Top rated first',
  }
} as const;

export const DEFAULT_SORT_ORDER = 'Popular';

export const BASE_URL = 'https://13.design.pages.academy/six-cities';

export const REQUEST_TIMEOUT = 5000;

export const AUTH_TOKEN_KEY = 'ZGRmZGZkZkBkZmtsamRmLmNvbQ==';

export const APIPath = {
  Offers: '/offers',
  Reviews: '/comments/:offerId',
  Login: '/login',
  OfferId: '/offers/:offerId',
  OffersNearby: '/offers/:offerId/nearby',
  Logout: '/logout'
} as const;

export const containerStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around'
};

export const spinnerCSSOverride: CSSProperties = {
  display: 'block',
  margin: '300px auto'
};

export const spinnerSize = 500;

export const spinnerColor = '#4481C3';

export const loadingStyle: CSSProperties = {
  display: 'block',
  margin: 'auto',
  color: '#4481C3',
  fontSize: 'x-large',
  fontWeight: '700'
};

export const TIMEOUT_SHOW_ERROR = 5000;

export const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

export const OFFERS_NEARBY_COUNT = 3;
