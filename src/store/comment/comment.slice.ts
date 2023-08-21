import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RequestStatusType } from '../../types/types';
import { NameSpace, RequestStatus } from '../../const';
import { postReviewAction } from '../api-actions';
import { processErrorHandle } from '../../services/process-error-handle';


export type CommentStateType = {
  commentPostingStatus: RequestStatusType;
  rating: number;
  comment: string;
}

const commentState: CommentStateType = {
  commentPostingStatus: RequestStatus.Idle,
  rating: 0,
  comment: ''
};

export const comment = createSlice({
  name: NameSpace.Review,
  initialState: commentState,
  reducers: {
    setStatusIdle: (state) => {
      state.commentPostingStatus = RequestStatus.Idle;
    },
    setReviewRating: (state, action: PayloadAction<number>) => {
      state.rating = action.payload;
    },
    setReviewComment: (state, action: PayloadAction<string>) => {
      state.comment = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(postReviewAction.pending, (state) => {
        state.commentPostingStatus = RequestStatus.Pending;
      })
      .addCase(postReviewAction.rejected, (state) => {
        state.commentPostingStatus = RequestStatus.Rejected;
      })
      .addCase(postReviewAction.fulfilled, (state) => {
        state.commentPostingStatus = RequestStatus.Fulfilled;
        state.comment = '';
        state.rating = 0;

      });
  }
});

export const {setStatusIdle, setReviewRating, setReviewComment} = comment.actions;
