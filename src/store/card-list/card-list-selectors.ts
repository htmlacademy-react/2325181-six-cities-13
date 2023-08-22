
import { NameSpace } from '../../const';
import { StateType } from '../../types/types';

export const selectLocation = (state: StateType) => state[NameSpace.CardList].location;

export const selectActiveSortOrder = (state: StateType) => state[NameSpace.CardList].activeSortOrder;
