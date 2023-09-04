import {render, screen} from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { Map } from './map';
import { makeFakeOffersList } from '../../utils/mocks';
import { MapDesign, AppPath } from '../../const';
import { getOffersCoordinates } from '../../helper';

describe('Component: Map', () => {
  it('should render correct', () => {
    const MAP_TEST_ID = 'map-element';
    const mockOffers = getOffersCoordinates(makeFakeOffersList());
    const mockClass = MapDesign[AppPath.Main].classAdded;
    const { withStoreComponent } = withStore(<Map offers={mockOffers} classAdded={mockClass}/>);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByTestId(MAP_TEST_ID)).toBeInTheDocument();
  });
});
