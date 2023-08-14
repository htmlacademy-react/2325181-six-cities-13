
import { State } from '../../types/types';
import { NameSpace } from '../../const';

export const selectReviewPostingStatus = (state: State) => state[NameSpace.Review].commentPostingStatus;
