
import { StateType } from '../../types/types';
import { NameSpace } from '../../const';

export const selectCommentPostingStatus = (state: StateType) => state[NameSpace.Review].commentPostingStatus;

export const selectReviewRating = (state: StateType) => state[NameSpace.Review].rating;

export const selectReviewComment = (state: StateType) => state[NameSpace.Review].comment;

