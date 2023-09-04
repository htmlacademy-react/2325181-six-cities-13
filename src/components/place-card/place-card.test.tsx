import {render, screen} from '@testing-library/react';
import PlaceCard from './place-card';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeOffersList } from '../../utils/mocks';
import { AppPath, PlaceCardDesign } from '../../const';

describe('Component: Place Card',() => {
  it('should render correctly', () => {
    const PLACE_CARD_TEST_ID = 'place-card-container';
    const EXPECTED_TEXT = 'Rating';
    const mockOffer = makeFakeOffersList()[0];
    const mockPlaceCardDesign = PlaceCardDesign[AppPath.Main];
    const {withStoreComponent} = withStore(<PlaceCard offer={mockOffer} {...mockPlaceCardDesign} />);
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);
    expect(screen.getByTestId(PLACE_CARD_TEST_ID)).toBeInTheDocument();
    expect(screen.getByText(EXPECTED_TEXT)).toBeInTheDocument();
  });
});
