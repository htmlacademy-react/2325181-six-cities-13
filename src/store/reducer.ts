import { createReducer } from '@reduxjs/toolkit';
import { updateLocation, updateSortOrder, setOfferId, loadOffers, setDataLoadingStatus } from './action';
import { Locations, AuthorisationStatus, SortOrders} from '../const';
import { LocationType, OffersType, ReviewsType, AuthorisationStatusType, ActiveSortOrderType } from '../types/types';
import { Reviews } from '../mocks/reviews';

export type InitialStateType = {
  location: LocationType;
  offers: OffersType;
  offerId: string;
  reviews: ReviewsType;
  authorisationStatus: AuthorisationStatusType;
  activeSortOrder: ActiveSortOrderType;
  isDataLoading: boolean;
};

export const initialState: InitialStateType = {
  location: Locations.Amsterdam,
  offers: [],
  offerId: '',
  reviews: Reviews,
  authorisationStatus: AuthorisationStatus.Auth,
  activeSortOrder: SortOrders.Popular.order,
  isDataLoading: false
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateLocation, (state, action) => {
      state.location = action.payload;
    })
    .addCase(setOfferId, (state, action) => {
      state.offerId = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(updateSortOrder, (state, action) => {
      state.activeSortOrder = action.payload;
    });

});
