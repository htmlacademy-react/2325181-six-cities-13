import { State } from '../../types/types';
import { NameSpace } from '../../const';

export const selectError = (state: State) => state[NameSpace.Error].error;
