import { NameSpace } from '../../const';
import { StateType } from '../../types/types';

export const selectReviewsList = (state: StateType) => state[NameSpace.Reviews].reviews;

export const selectReviewsStatus = (state: StateType) => state[NameSpace.Reviews].reviewsLoadingStatus;

export const seleReviewsErrorStatus = (state: StateType) => state[NameSpace.Reviews].hasReviewsError;
