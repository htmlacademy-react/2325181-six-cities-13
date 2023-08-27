import { StateType } from '../../types/types';
import { NameSpace } from '../../const';

export const selectOffers = (state: StateType) => state[NameSpace.Offers].offers;

export const selectOffersLoadingStatus = (state: StateType) => state[NameSpace.Offers].offersLoadingStatus;

export const selectDataErrorStatus = (state: StateType) => state[NameSpace.Offers].hasDataError;
