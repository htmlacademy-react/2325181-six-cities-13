import {render, screen} from '@testing-library/react';
import Review from './review';
import { withStore } from '../../utils/mock-component';

describe('Component: Review',() => {
  it('should render correctly', () => {
    const RATING_TEST_ID = 'ratingElement';
    const COMMENT_TEST_ID = 'commentElement';
    const EXPECTED_TEXT = 'Your review';
    const expectedPlaceholderText = 'Tell how was your stay, what you like and what can be improved';
    const {withStoreComponent} = withStore(<Review />);
    render(withStoreComponent);
    expect(screen.getByTestId(RATING_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(COMMENT_TEST_ID)).toBeInTheDocument();
    expect(screen.getByText(EXPECTED_TEXT)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(expectedPlaceholderText)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

});
