import {render, screen} from '@testing-library/react';
import FavoritesButton from './favorites-button';
import { withStore } from '../../utils/mock-component';

describe('Component: Favorites Button',() => {
  it('should render correctly', () => {
    const BOOKMARK_TEST_ID = 'bookmark-container';
    const TEST_OFFER_ID = '1';
    const testIsFavorite = false;
    const testIsOfferButton = false;
    const {withStoreComponent} = withStore(<FavoritesButton offerId={TEST_OFFER_ID} isFavorite={testIsFavorite} isOfferButton={testIsOfferButton} />);
    render(withStoreComponent);
    expect(screen.getByTestId(BOOKMARK_TEST_ID)).toBeInTheDocument();
  });
});
