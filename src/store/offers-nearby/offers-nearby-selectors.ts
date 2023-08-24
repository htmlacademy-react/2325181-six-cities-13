import { NameSpace } from '../../const';
import { StateType } from '../../types/types';

export const selectOffersNearby = (state: StateType) => state[NameSpace.OffersNearby].offersNearby;
