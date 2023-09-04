import {render, screen} from '@testing-library/react';
import NearbyList from './nearby-list';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeOffersList, makeFakeStore } from '../../utils/mocks';

describe('Component: Nearby List',() => {
  it('should render correctly', () => {
    const MAIN_LIST_TEST_ID = 'nearby-list-container';
    const EXPECTED_TEXT = 'Other places in the neighbourhood';
    const mockOffers = makeFakeOffersList();
    const nearbyMockStore = makeFakeStore();
    nearbyMockStore.offersNearby.offersNearby = mockOffers;
    const {withStoreComponent} = withStore(<NearbyList />, nearbyMockStore);
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);
    expect(screen.getByTestId(MAIN_LIST_TEST_ID)).toBeInTheDocument();
    expect(screen.getByText(EXPECTED_TEXT)).toBeInTheDocument();
  });
});
