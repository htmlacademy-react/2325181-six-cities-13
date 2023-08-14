import { createSlice } from '@reduxjs/toolkit';
import { RequestStatusType } from '../../types/types';
import { NameSpace, RequestStatus } from '../../const';
import { postReviewAction } from '../api-actions';

export type CommentStateType = {
  commentPostingStatus: RequestStatusType;
  hasCommentError: boolean;
}

const commentState: CommentStateType = {
  commentPostingStatus: RequestStatus.Idle,
  hasCommentError: false
};

export const comment = createSlice({
  name: NameSpace.Review,
  initialState: commentState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(postReviewAction.pending, (state) => {
        state.commentPostingStatus = RequestStatus.Pending;
        state.hasCommentError = false;
      })
      .addCase(postReviewAction.rejected, (state) => {
        state.commentPostingStatus = RequestStatus.Rejected;
        state.hasCommentError = true;
      })
      .addCase(postReviewAction.fulfilled, (state) => {
        state.commentPostingStatus = RequestStatus.Fulfilled;
      });
  }
});
