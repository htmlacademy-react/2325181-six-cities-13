import { ReviewsStateType, loadReviewsList, addComment, reviews } from './reviews-slice';
import { loadReviewsListAction } from '../api-actions';
import { RequestStatus } from '../../const';

describe('Offer Details Slice', () => {
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
      reviews: [],
      reviewsLoadingStatus: RequestStatus.Idle,
      hasReviewsError: false
    };
  })

});
