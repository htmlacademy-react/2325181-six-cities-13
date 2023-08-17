
import { State } from '../../types/types';
import { NameSpace } from '../../const';

export const selectCommentPostingStatus = (state: State) => state[NameSpace.Review].commentPostingStatus;

export const selectCommentErrorStatus = (state: State) => state[NameSpace.Review].hasCommentError;
