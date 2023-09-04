import {render, screen} from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import FavoritesPage from './favorites-page';
import { makeFakeStore } from '../../utils/mocks';
import { RequestStatus } from '../../const';

describe('Component: Favorites Page', () => {
  it('should render correct', () => {
    const FAVORITES_PAGE_TEST_ID = 'favorites-page-element';
    const mockStore = makeFakeStore();
    mockStore.favorites.favoritesLoadingStatus = RequestStatus.Fulfilled;
    const { withStoreComponent } = withStore(<FavoritesPage />, mockStore);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByTestId(FAVORITES_PAGE_TEST_ID)).toBeInTheDocument();
  });
});

