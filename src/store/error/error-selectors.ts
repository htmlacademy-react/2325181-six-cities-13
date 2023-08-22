import { StateType } from '../../types/types';
import { NameSpace } from '../../const';

export const selectError = (state: StateType) => state[NameSpace.Error].error;
