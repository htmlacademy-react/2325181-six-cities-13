import {render, screen} from '@testing-library/react';
import FavoritesList from './favorites-list';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeOffersList } from '../../utils/mocks';
import { groupByCity } from '../../helper';

describe('Component: Favorites List',() => {
  it('should render correctly', () => {
    const FAVORITES_LIST_TEST_ID = 'favorites-list-container';
    const EXPECTED_TEXT = 'Saved listing';
    const mockOffers = makeFakeOffersList();
    const testGroupOffersByLocation = groupByCity(mockOffers);
    const {withStoreComponent} = withStore(<FavoritesList groupByLocation={testGroupOffersByLocation} />);
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);
    expect(screen.getByTestId(FAVORITES_LIST_TEST_ID)).toBeInTheDocument();
    expect(screen.getByText(EXPECTED_TEXT)).toBeInTheDocument();
  });
});
