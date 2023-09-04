import { render, screen} from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import MapOffer from './map-offer';
import { makeFakeOffersList, makeFakeStore } from '../../utils/mocks';

describe('Component: Map Offer',() => {
  it('should render correctly, should contain "offer__map map" class', () => {
    const EXPECTED_CLASS = 'offer__map map';
    const MAP_TEST_ID = 'map-element';
    const mockStore = makeFakeStore();
    const mockOffer = makeFakeOffersList()[0];
    mockStore.offerDetails.offerDetails = mockOffer;
    const {withStoreComponent} = withStore(<MapOffer />, mockStore);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByTestId(MAP_TEST_ID)).toHaveClass(EXPECTED_CLASS);

  });
});
