import { StateType } from '../../types/types';
import { NameSpace } from '../../const';

export const selectOfferId = (state: StateType) => state[NameSpace.OfferDetails].offerId;

export const selectOfferDetails = (state: StateType) => state[NameSpace.OfferDetails].offerDetails;

export const selectOfferStatus = (state: StateType) => state[NameSpace.OfferDetails].offerLoadingStatus;

export const selectOfferDetailsErrorStatus = (state: StateType) => state[NameSpace.OfferDetails].hasOfferDetailsError;
