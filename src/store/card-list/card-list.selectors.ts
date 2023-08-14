
import { NameSpace } from '../../const';
import { State } from '../../types/types';

export const selectLocation = (state: State) => state[NameSpace.CardList].location;

export const selectActiveSortOrder = (state: State) => state[NameSpace.CardList].activeSortOrder;
