import { createReducer } from '@reduxjs/toolkit';
import { updateLocation, updateSortOrder, setOfferId, loadOffers, setDataLoadingStatus, updateAuthorisationStatus, loadOfferDetails, loadReviewsList, loadOffersNearby } from './action';
import { Locations, AuthorisationStatus, SortOrders} from '../const';
import { LocationType, OffersType, ReviewsType, AuthorisationStatusType, ActiveSortOrderType, OfferType } from '../types/types';

export type InitialStateType = {
  location: LocationType;
  offers: OffersType;
  offersNearby: OffersType;
  offerId: string;
  offerDetails: OfferType | null;
  reviews: ReviewsType;
  authorisationStatus: AuthorisationStatusType;
  activeSortOrder: ActiveSortOrderType;
  isDataLoading: boolean;
};

export const initialState: InitialStateType = {
  location: Locations.Amsterdam,
  offers: [],
  offersNearby: [],
  offerId: '',
  offerDetails: null,
  reviews: [],
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
    .addCase(loadOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(loadOfferDetails, (state, action) => {
      state.offerDetails = action.payload;
    })
    .addCase(loadReviewsList, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(updateAuthorisationStatus, (state, action) => {
      state.authorisationStatus = action.payload;
    })
    .addCase(updateSortOrder, (state, action) => {
      state.activeSortOrder = action.payload;
    });

});
