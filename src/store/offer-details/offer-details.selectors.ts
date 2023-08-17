import { State } from '../../types/types';
import { NameSpace } from '../../const';

export const selectOfferId = (state: State) => state[NameSpace.OfferDetails].offerId;

export const selectOfferDetails = (state: State) => state[NameSpace.OfferDetails].offerDetails;

export const selectOfferStatus = (state: State) => state[NameSpace.OfferDetails].offerLoadingStatus;

export const selectOfferDetailsErrorStatus = (state: State) => state[NameSpace.OfferDetails].hasOfferDetailsError;
