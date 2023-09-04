import { render, screen} from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import MapMain from './map-main';
import { makeFakeOffersList } from '../../utils/mocks';

describe('Component: Map Main',() => {
  it('should render correctly, should contain "cities__map map" class', () => {
    const mockOffers = makeFakeOffersList();
    const EXPECTED_CLASS = 'cities__map map';
    const MAP_TEST_ID = 'map-element';
    const {withStoreComponent} = withStore(<MapMain offers={mockOffers}/>);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByTestId(MAP_TEST_ID)).toHaveClass(EXPECTED_CLASS);

  });
});
