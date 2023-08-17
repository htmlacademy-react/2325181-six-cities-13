import { NameSpace } from '../../const';
import { State } from '../../types/types';

export const selectOffersNearby = (state: State) => state[NameSpace.OffersNearby].offersNearby;

export const selectNearbyStatus = (state: State) => state[NameSpace.OffersNearby].nearbyLoadingStatus;

export const selectNearbyErrorStatus = (state: State) => state[NameSpace.OffersNearby].hasNearbyError;
