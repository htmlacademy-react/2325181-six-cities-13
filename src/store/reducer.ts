import { createReducer } from '@reduxjs/toolkit';
import { changeLocation } from './action';
import { Locations, AuthorisationStatus } from '../const';
import { LocationType, OffersType, ReviewsType, AuthorisationStatusType} from '../types/types';
import { Offers } from '../mocks/offers';
import { Reviews } from '../mocks/reviews';


export type InitialStateType = {
  location: LocationType;
  offers: OffersType;
  reviews: ReviewsType;
  authorisationStatus: AuthorisationStatusType;
};

const initialState: InitialStateType = {
  location: Locations.Amsterdam,
  offers: Offers,
  reviews: Reviews,
  authorisationStatus: AuthorisationStatus.Auth
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeLocation, (state, action) => {
      state.location = action.payload;
    });

});
