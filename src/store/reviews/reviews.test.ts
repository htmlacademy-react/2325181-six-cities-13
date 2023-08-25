import { ReviewsStateType, loadReviewsList, addComment, reviews } from './reviews-slice';
import { loadReviewsListAction } from '../api-actions';
import { RequestStatus } from '../../const';
import { makeFakeReviewsList } from '../../utils/mocks';
import { getRandomArrayElement } from '../../helper';

describe('Reviews Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState: ReviewsStateType = {
      reviews: [],
      reviewsLoadingStatus: RequestStatus.Idle,
      hasReviewsError: false
    };
    const result = reviews.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState: ReviewsStateType = {
      reviews: [],
      reviewsLoadingStatus: RequestStatus.Idle,
      hasReviewsError: false
    };
    const result = reviews.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "reviews" to reviews array with "loadReviewsList" action', () => {
    const initialState: ReviewsStateType = {
      reviews: [],
      reviewsLoadingStatus: RequestStatus.Idle,
      hasReviewsError: false
    };
    const mockReviewsList = makeFakeReviewsList();
    const expectedState: ReviewsStateType = {
      reviews: mockReviewsList,
      reviewsLoadingStatus: RequestStatus.Idle,
      hasReviewsError: false
    };
    const result = reviews.reducer(initialState, loadReviewsList(mockReviewsList));

    expect(result).toEqual(expectedState);
  });

  it('set "reviews" to add new review to array with "addComment" action', () => {
    const mockInitialReviewsList = makeFakeReviewsList();
    const mockReview = structuredClone(getRandomArrayElement(mockInitialReviewsList));
    const initialState: ReviewsStateType = {
      reviews: mockInitialReviewsList,
      reviewsLoadingStatus: RequestStatus.Idle,
      hasReviewsError: false
    };
    const mockExpectedReviewsList = [...mockInitialReviewsList, mockReview];
    const expectedState: ReviewsStateType = {
      reviews: mockExpectedReviewsList,
      reviewsLoadingStatus: RequestStatus.Idle,
      hasReviewsError: false
    };
    const result = reviews.reducer(initialState, addComment(mockReview));

    expect(result).toEqual(expectedState);
  });

  it('should set "reviewsLoadingStatus" to "RequestStatus.Pending", "hasReviewsError" to "false" with "loadReviewsListAction.pending" action', () => {
    const initialState: ReviewsStateType = {
      reviews: [],
      reviewsLoadingStatus: RequestStatus.Idle,
      hasReviewsError: true
    };
    const expectedState: ReviewsStateType = {
      reviews: [],
      reviewsLoadingStatus: RequestStatus.Pending,
      hasReviewsError: false
    };
    const result = reviews.reducer(initialState, loadReviewsListAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "reviewsLoadingStatus" to "RequestStatus.Fulfilled" with "loadReviewsListAction.fulfilled" action', () => {
    const initialState: ReviewsStateType = {
      reviews: [],
      reviewsLoadingStatus: RequestStatus.Pending,
      hasReviewsError: false
    };
    const expectedState: ReviewsStateType = {
      reviews: [],
      reviewsLoadingStatus: RequestStatus.Fulfilled,
      hasReviewsError: false
    };
    const result = reviews.reducer(initialState, loadReviewsListAction.fulfilled);

    expect(result).toEqual(expectedState);
  });

  it('should set "reviewsLoadingStatus" to "RequestStatus.Rejected", "hasReviewsError" to "true" with "loadReviewsListAction.rejected" action', () => {
    const initialState: ReviewsStateType = {
      reviews: [],
      reviewsLoadingStatus: RequestStatus.Pending,
      hasReviewsError: false
    };
    const expectedState: ReviewsStateType = {
      reviews: [],
      reviewsLoadingStatus: RequestStatus.Rejected,
      hasReviewsError: true
    };
    const result = reviews.reducer(initialState, loadReviewsListAction.rejected);

    expect(result).toEqual(expectedState);
  });
});
