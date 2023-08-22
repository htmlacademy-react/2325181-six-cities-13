import { StateType } from '../../types/types';
import { NameSpace } from '../../const';

export const selectOffers = (state: StateType) => state[NameSpace.Offers].offers;

export const selectDataLoadingStatus = (state: StateType) => state[NameSpace.Offers].isDataLoading;

export const selectDataErrorStatus = (state: StateType) => state[NameSpace.Offers].hasDataError;
