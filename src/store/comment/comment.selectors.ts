
import { State } from '../../types/types';
import { NameSpace } from '../../const';

export const selectCommentPostingStatus = (state: State) => state[NameSpace.Review].commentPostingStatus;

export const selectReviewRating = (state: State) => state[NameSpace.Review].rating;

export const selectReviewComment = (state: State) => state[NameSpace.Review].comment;

