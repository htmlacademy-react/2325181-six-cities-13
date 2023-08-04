import { InitialStateType } from '../store/reducer';

export const selectLocation = (state: InitialStateType) => state.location;

export const selectActiveSortOrder = (state: InitialStateType) => state.activeSortOrder;

export const selectAuthorisationStatus = (state: InitialStateType) => state.authorisationStatus;

export const selectOffers = (state: InitialStateType) => state.offers;

export const selectReviews = (state: InitialStateType) => state.reviews;

export const selectOfferId = (state: InitialStateType) => state.offerId;
