import { NameSpace } from '../../const';
import { StateType } from '../../types/types';

export const selectOffersNearby = (state: StateType) => state[NameSpace.OffersNearby].offersNearby;

export const selectNearbyStatus = (state: StateType) => state[NameSpace.OffersNearby].nearbyLoadingStatus;

export const selectNearbyErrorStatus = (state: StateType) => state[NameSpace.OffersNearby].hasNearbyError;
