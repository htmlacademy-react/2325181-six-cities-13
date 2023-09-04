import {render, screen} from '@testing-library/react';
import MainList from './main-list';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeOffersList } from '../../utils/mocks';

describe('Component: Main List',() => {
  it('should render correctly', () => {
    const MAIN_LIST_TEST_ID = 'main-list-container';
    const EXPECTED_TEXT = 'Places';
    const mockOffers = makeFakeOffersList();
    const {withStoreComponent} = withStore(<MainList offers={mockOffers} />);
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);
    expect(screen.getByTestId(MAIN_LIST_TEST_ID)).toBeInTheDocument();
    expect(screen.getByText(EXPECTED_TEXT)).toBeInTheDocument();
  });
});
