import { createReducer } from '@reduxjs/toolkit';
import { updateLocation, updateSortOrder, setOfferId, loadOffers, setDataLoadingStatus, updateAuthorisationStatus, loadOfferDetails, loadReviewsList, loadOffersNearby, setError, setEmail, addComment, idleReviewPostingStatus } from './action';
import { Locations, AuthorisationStatus, SortOrders, RequestStatus} from '../const';
import { LocationType, OffersType, ReviewsType, AuthorisationStatusType, ActiveSortOrderType, OfferType, RequestStatusType } from '../types/types';
import { loadOfferDetailsAction, loadOffersNearbyAction, loadReviewsListAction, postReviewAction} from './api-actions';

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
  error: string | null;
  email: string;
  offerLoadingStatus: RequestStatusType;
  reviewsLoadingStatus: RequestStatusType;
  nearbyLoadingStatus: RequestStatusType;
  reviewPostingStatus: RequestStatusType;
};

export const initialState: InitialStateType = {
  location: Locations.Paris,
  offers: [],
  offersNearby: [],
  offerId: '',
  offerDetails: null,
  reviews: [],
  authorisationStatus: AuthorisationStatus.Unknown,
  activeSortOrder: SortOrders.Popular.order,
  isDataLoading: false,
  error: null,
  email: '',
  offerLoadingStatus: RequestStatus.Idle,
  reviewsLoadingStatus: RequestStatus.Idle,
  nearbyLoadingStatus: RequestStatus.Idle,
  reviewPostingStatus: RequestStatus.Idle
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
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setEmail, (state, action) => {
      state.email = action.payload;
    })
    .addCase(addComment, (state, action) => {
      state.reviews.push(action.payload);
    })
    .addCase(updateSortOrder, (state, action) => {
      state.activeSortOrder = action.payload;
    })
    .addCase(loadOfferDetailsAction.pending, (state) => {
      state.offerLoadingStatus = RequestStatus.Pending;
    })
    .addCase(loadOffersNearbyAction.pending, (state) => {
      state.nearbyLoadingStatus = RequestStatus.Pending;
    })
    .addCase(loadReviewsListAction.pending, (state) => {
      state.reviewsLoadingStatus = RequestStatus.Pending;
    })
    .addCase(loadOfferDetailsAction.fulfilled, (state) => {
      state.offerLoadingStatus = RequestStatus.Fulfilled;
    })
    .addCase(loadOffersNearbyAction.fulfilled, (state) => {
      state.nearbyLoadingStatus = RequestStatus.Fulfilled;
    })
    .addCase(loadReviewsListAction.fulfilled, (state) => {
      state.reviewsLoadingStatus = RequestStatus.Fulfilled;
    })
    .addCase(loadOfferDetailsAction.rejected, (state) => {
      state.offerLoadingStatus = RequestStatus.Rejected;
    })
    .addCase(loadOffersNearbyAction.rejected, (state) => {
      state.nearbyLoadingStatus = RequestStatus.Rejected;
    })
    .addCase(loadReviewsListAction.rejected, (state) => {
      state.reviewsLoadingStatus = RequestStatus.Rejected;
    })
    .addCase(postReviewAction.pending, (state) => {
      state.reviewPostingStatus = RequestStatus.Pending;
    })
    .addCase(postReviewAction.rejected, (state) => {
      state.reviewPostingStatus = RequestStatus.Rejected;
    })
    .addCase(postReviewAction.fulfilled, (state) => {
      state.reviewPostingStatus = RequestStatus.Fulfilled;
    })
    .addCase(idleReviewPostingStatus, (state) => {
      state.reviewPostingStatus = RequestStatus.Idle;
    });

});
