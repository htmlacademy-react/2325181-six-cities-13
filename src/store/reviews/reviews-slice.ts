import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {ReviewsType, ReviewType, RequestStatusType } from '../../types/types';
import { NameSpace, RequestStatus } from '../../const';
import {loadReviewsListAction} from '../api-actions';

export type ReviewsStateType = {
  reviews: ReviewsType;
  reviewsLoadingStatus: RequestStatusType;
  hasReviewsError: boolean;
}

const reviewsState: ReviewsStateType = {
  reviews: [],
  reviewsLoadingStatus: RequestStatus.Idle,
  hasReviewsError: false
};

export const reviews = createSlice({
  name: NameSpace.Reviews,
  initialState: reviewsState,
  reducers: {
    loadReviewsList: (state, action: PayloadAction<ReviewsType>) => {
      state.reviews = action.payload;
    },
    addComment: (state, action: PayloadAction<ReviewType>) => {
      state.reviews.push(action.payload);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(loadReviewsListAction.pending, (state) => {
        state.reviewsLoadingStatus = RequestStatus.Pending;
        state.hasReviewsError = false;
      })
      .addCase(loadReviewsListAction.fulfilled, (state) => {
        state.reviewsLoadingStatus = RequestStatus.Fulfilled;
      })
      .addCase(loadReviewsListAction.rejected, (state) => {
        state.reviewsLoadingStatus = RequestStatus.Rejected;
        state.hasReviewsError = true;
      });
  }
});

export const {loadReviewsList, addComment} = reviews.actions;

