import { createReducer } from '@reduxjs/toolkit';
import { changeLocation, updateSortOrder } from './action';
import { Locations, AuthorisationStatus, SortOrders} from '../const';
import { LocationType, OffersType, ReviewsType, AuthorisationStatusType, ActiveSortOrderType} from '../types/types';
import { Offers } from '../mocks/offers';
import { Reviews } from '../mocks/reviews';

export type InitialStateType = {
  location: LocationType;
  offers: OffersType;
  reviews: ReviewsType;
  authorisationStatus: AuthorisationStatusType;
  activeSortOrder: ActiveSortOrderType;
};

const initialState: InitialStateType = {
  location: Locations.Amsterdam,
  offers: Offers,
  reviews: Reviews,
  authorisationStatus: AuthorisationStatus.Auth,
  activeSortOrder: SortOrders.Popular.order
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeLocation, (state, action) => {
      state.location = action.payload;
    })
    .addCase(updateSortOrder, (state, action) => {
      state.activeSortOrder = action.payload;
    });

});
