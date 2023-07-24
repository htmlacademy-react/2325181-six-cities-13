import { AVATAR_URL, Locations, LocationsCoordinates, LodgingKinds } from '../const';
import { OffersType } from '../types/types';

const Offers: OffersType = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: LodgingKinds.Aparment,
    price: 120,
    previewImage: 'https://13.design.pages.academy/static/hotel/12.jpg',
    city: {
      name: Locations.Amsterdam,
      location: {
        ...LocationsCoordinates.Amsterdam,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 4,
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Heating', 'Wi-Fi', 'A/C'
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: false
    },
    images: [
      'img/apartment-01.jpg'
    ],
    maxAdults: 1
  },
  {
    id: '34f50f68-803c-43a9-8d59-9556fb9c0eaa',
    title: 'The house among olive ',
    type: LodgingKinds.Hotel,
    price: 197,
    previewImage: 'https://13.design.pages.academy/static/hotel/10.jpg',
    city: {
      name: Locations.Amsterdam,
      location: {
        ...LocationsCoordinates.Amsterdam,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 1.1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    bedrooms: 2,
    goods: [
      'Towels', 'Baby seat', 'Fridge'
    ],
    host: {
      name: 'Michael Daves',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: true
    },
    images: [
      'https://loremflickr.com/320/240/hotel,Paris,reception/all',
      'https://loremflickr.com/320/240/hotel,Paris,bed/all',
      'https://loremflickr.com/320/240/hotel,Paris,restaurant/all'
    ],
    maxAdults: 2
  },
  {
    id: '4b658388-7118-4e47-806a-fa5b0d41e8b0',
    title: 'Amazing and Extremely Central Flat',
    type: LodgingKinds.Aparment,
    price: 174,
    previewImage: 'https://13.design.pages.academy/static/hotel/18.jpg',
    city: {
      name: Locations.Amsterdam,
      location: {
        ...LocationsCoordinates.Amsterdam,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 1.5,
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    bedrooms: 2,
    goods: [
      'Microwave oven', 'Coffee machine', 'Washing machine'
    ],
    host: {
      name: 'Suzanne Vega',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: true
    },
    images: [
      'https://loremflickr.com/320/240/apartment,Paris,bed/all',
      'https://loremflickr.com/320/240/apartment,Paris,kitchen/all',
      'https://loremflickr.com/320/240/apartment,Paris,bathroom/all'
    ],
    maxAdults: 3
  },
  {
    id: 'c99c9239-7836-4115-a767-ee81c4b835ad',
    title: 'Amazing and Extremely Central Flat',
    type: LodgingKinds.Room,
    price: 224,
    previewImage: 'https://13.design.pages.academy/static/hotel/3.jpg',
    city: {
      name: Locations.Amsterdam,
      location: {
        ...LocationsCoordinates.Amsterdam,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3505553943508,
      longitude: 4.919309666406198,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 2.7,
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    bedrooms: 1,
    goods: [
      'Kitchen', 'Cabel TV', 'Kettle'
    ],
    host: {
      name: 'Ozzy Osborne',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: true
    },
    images: [
      'https://loremflickr.com/320/240/room,Paris,bed/all',
      'https://loremflickr.com/320/240/room,Paris,kitchen/all',
      'https://loremflickr.com/320/240/room,Paris,bathroom/all'
    ],
    maxAdults: 1
  }
];

export { Offers };
