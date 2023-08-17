import { State } from '../../types/types';
import { NameSpace } from '../../const';

export const selectOffers = (state: State) => state[NameSpace.Offers].offers;

export const selectDataLoadingStatus = (state: State) => state[NameSpace.Offers].isDataLoading;

export const selectDataErrorStatus = (state: State) => state[NameSpace.Offers].hasDataError;
