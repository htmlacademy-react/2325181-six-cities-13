import { InitialStateType } from '../store/reducer';

export const selectLocation = (state: InitialStateType) => state.location;

export const selectActiveSortOrder = (state: InitialStateType) => state.activeSortOrder;

export const selectAuthorisationStatus = (state: InitialStateType) => state.authorisationStatus;

export const selectOffers = (state: InitialStateType) => state.offers;

export const selectOffersNearby = (state: InitialStateType) => state.offersNearby;

export const selectOfferId = (state: InitialStateType) => state.offerId;

export const selectDataLoadingStatus = (state: InitialStateType) => state.isDataLoading;

export const selectOfferDetails = (state: InitialStateType) => state.offerDetails;

export const selectReviewsList = (state: InitialStateType) => state.reviews;

export const selectError = (state: InitialStateType) => state.error;

export const selectEmail = (state: InitialStateType) => state.email;

export const selectOfferStatus = (state: InitialStateType) => state.offerLoadingStatus;

export const selectReviewStatus = (state: InitialStateType) => state.reviewsLoadingStatus;

export const selectNearbyStatus = (state: InitialStateType) => state.nearbyLoadingStatus;

export const selectReviewPostingStatus = (state: InitialStateType) => state.reviewPostingStatus;
