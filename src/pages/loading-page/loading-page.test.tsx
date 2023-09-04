import {render, screen} from '@testing-library/react';
import LoadingPage from './loading-page';

describe('Component: Loading page', () => {
  it('should render correct', () => {
    const LOADING_PAGE_TEST_ID = 'loading-page-element';
    const EXPECTED_TEXT = 'Loading...';

    render(<LoadingPage />);

    expect(screen.getByTestId(LOADING_PAGE_TEST_ID)).toBeInTheDocument();
    expect(screen.getByText(EXPECTED_TEXT)).toBeInTheDocument();
  });
});
