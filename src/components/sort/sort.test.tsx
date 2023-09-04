import {render, screen} from '@testing-library/react';
import Sort from './sort';
import { withHistory, withStore } from '../../utils/mock-component';

describe('Component: Sort',() => {
  it('should render correctly', () => {
    const SORT_TEST_ID = 'sortElement';
    const EXPECTED_TEXT = 'Sort by';
    const {withStoreComponent} = withStore(<Sort />);
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);
    expect(screen.getByTestId(SORT_TEST_ID)).toBeInTheDocument();
    expect(screen.getByText(EXPECTED_TEXT)).toBeInTheDocument();
  });
});
