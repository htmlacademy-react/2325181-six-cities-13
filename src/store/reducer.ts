import { createReducer } from '@reduxjs/toolkit';
import { updateLocation, updateSortOrder, setOfferId } from './action';
import { Locations, AuthorisationStatus, SortOrders} from '../const';
import { LocationType, OffersType, ReviewsType, AuthorisationStatusType, ActiveSortOrderType } from '../types/types';
import { Offers } from '../mocks/offers';
import { Reviews } from '../mocks/reviews';

export type InitialStateType = {
  location: LocationType;
  offers: OffersType;
  offerId: string;
  reviews: ReviewsType;
  authorisationStatus: AuthorisationStatusType;
  activeSortOrder: ActiveSortOrderType;
};

export const initialState: InitialStateType = {
  location: Locations.Amsterdam,
  offers: Offers,
  offerId: '',
  reviews: Reviews,
  authorisationStatus: AuthorisationStatus.Auth,
  activeSortOrder: SortOrders.Popular.order
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateLocation, (state, action) => {
      state.location = action.payload;
    })
    .addCase(setOfferId, (state, action) => {
      state.offerId = action.payload;
    })
    .addCase(updateSortOrder, (state, action) => {
      state.activeSortOrder = action.payload;
    });

});
