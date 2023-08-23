import { CommentStateType, comment, setReviewRating, setStatusIdle, setReviewComment, resetReviewData } from './comment-slice';
import { RequestStatus } from '../../const';
import { postReviewAction } from '../api-actions';

describe('Comment Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState: CommentStateType = {
      commentPostingStatus: RequestStatus.Idle,
      rating: 0,
      comment: ''
    };
    const result = comment.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState: CommentStateType = {
      commentPostingStatus: RequestStatus.Idle,
      rating: 0,
      comment: ''
    };
    const result = comment.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set status idle with "setStatusIdle" action ', () => {
    const initialState: CommentStateType = {
      commentPostingStatus: RequestStatus.Fulfilled,
      rating: 0,
      comment: ''
    };
    const expectedState: CommentStateType = {
      commentPostingStatus: RequestStatus.Idle,
      rating: 0,
      comment: ''
    };
    const result = comment.reducer(initialState, setStatusIdle);
    expect(result.commentPostingStatus).toBe(expectedState.commentPostingStatus);
  });

  it('should set review rating with "setReviewRating" action ', () => {
    const initialState: CommentStateType = {
      commentPostingStatus: RequestStatus.Idle,
      rating: 0,
      comment: ''
    };
    const expectedState: CommentStateType = {
      commentPostingStatus: RequestStatus.Idle,
      rating: 3,
      comment: ''
    };
    const result = comment.reducer(initialState, setReviewRating(3));
    expect(result.rating).toBe(expectedState.rating);
  });

  it('should set review comment with "setReviewComment" action ', () => {
    const initialState: CommentStateType = {
      commentPostingStatus: RequestStatus.Idle,
      rating: 0,
      comment: ''
    };
    const expectedState: CommentStateType = {
      commentPostingStatus: RequestStatus.Idle,
      rating: 0,
      comment: 'Lorem ipsum dolor sit amet'
    };
    const result = comment.reducer(initialState, setReviewComment('Lorem ipsum dolor sit amet'));
    expect(result.comment).toBe(expectedState.comment);
  });

  it('should reset review data with "resetReviewData" action ', () => {
    const initialState: CommentStateType = {
      commentPostingStatus: RequestStatus.Idle,
      rating: 3,
      comment: 'Lorem ipsum dolor sit amet'
    };
    const expectedState: CommentStateType = {
      commentPostingStatus: RequestStatus.Idle,
      rating: 0,
      comment: ''
    };
    const result = comment.reducer(initialState, resetReviewData);
    expect(result).toEqual(expectedState);
  });

  it('should change "commentPostingStatus" to "RequestStatus.Pending" with "postReviewAction.pending"', () => {
    const expectedState: CommentStateType = {
      commentPostingStatus: RequestStatus.Pending,
      rating: 0,
      comment: ''
    };
    const result = comment.reducer(undefined, postReviewAction.pending);
    expect(result).toEqual(expectedState);
  });

  it('should change "commentPostingStatus" to "RequestStatus.Rejected" with "postReviewAction.rejected"', () => {
    const expectedState: CommentStateType = {
      commentPostingStatus: RequestStatus.Rejected,
      rating: 0,
      comment: ''
    };
    const result = comment.reducer(undefined, postReviewAction.rejected);
    expect(result).toEqual(expectedState);
  });

  it('should change "commentPostingStatus" to "RequestStatus.Fulfilled", "comment" to "", rating to "0" and  with "postReviewAction.fulfilled"', () => {
    const expectedState: CommentStateType = {
      commentPostingStatus: RequestStatus.Fulfilled,
      rating: 0,
      comment: ''
    };
    const result = comment.reducer(undefined, postReviewAction.fulfilled);
    expect(result).toEqual(expectedState);
  });

});
