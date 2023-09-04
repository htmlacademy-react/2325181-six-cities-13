import {render, screen} from '@testing-library/react';
import ReviewList from './review-list';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeReviewsList, makeFakeStore } from '../../utils/mocks';
import { RequestStatus } from '../../const';

describe('Component: Review List',() => {
  it('should render correctly', () => {
    const REVIEW_LIST_TEST_ID = 'review-list-container';
    const expectedText = /Reviews.*/;
    const mockReviews = makeFakeReviewsList();
    const reviewMockStore = makeFakeStore();
    reviewMockStore.reviews.reviewsLoadingStatus = RequestStatus.Fulfilled;
    reviewMockStore.reviews.reviews = mockReviews;
    const {withStoreComponent} = withStore(<ReviewList />, reviewMockStore);
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);
    expect(screen.getByTestId(REVIEW_LIST_TEST_ID)).toBeInTheDocument();
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
