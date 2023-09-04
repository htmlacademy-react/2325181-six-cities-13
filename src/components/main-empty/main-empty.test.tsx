import {render, screen} from '@testing-library/react';
import { Location } from '../../const';
import MainEmpty from './main-empty';

describe('Component: Main Empty', () => {
  it('should render correctly', () => {
    const expectedLocation = Location.Paris;
    const expectedText = new RegExp(`.+${expectedLocation}`,'i');
    const MAIN_EMPTY_CONTAINER_TEST_ID = 'main-empty-container';
    const MAIN_EMPTY_DESCRIPTION_TEST_ID = 'main-empty-description';

    render(<MainEmpty location={expectedLocation} />);
    const mainEmptyContainer = screen.getByTestId(MAIN_EMPTY_CONTAINER_TEST_ID);
    const mainEmptyDescription = screen.getByTestId(MAIN_EMPTY_DESCRIPTION_TEST_ID);

    expect(mainEmptyContainer).toBeInTheDocument();
    expect(mainEmptyDescription).toBeInTheDocument();
    expect(screen.getByText(expectedText)).toBeInTheDocument();

  });
});

