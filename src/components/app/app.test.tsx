import { render, screen } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import App from './app';
import { makeFakeOffersList, makeFakeStore } from '../../utils/mocks';
import { MemoryHistory, createMemoryHistory } from 'history';
import { AppPath, AuthorisationStatus, RequestStatus } from '../../const';

describe('Component: App', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render "MainPage" when user navigates to "/"', () => {
    const EXPECTED_TEXT = 'Cities';
    const appMockStore = makeFakeStore();
    appMockStore.offers.offersLoadingStatus = RequestStatus.Fulfilled;
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, appMockStore);
    mockHistory.push(AppPath.Main);

    render(withStoreComponent);

    expect(screen.getByText(EXPECTED_TEXT)).toBeInTheDocument();
  });

  it('should render "FavoritesPage" when user navigates to "/favorites" and user authorised', () => {
    const FAVORITES_PAGE_TEST_ID = 'favorites-page-element';
    const appMockStore = makeFakeStore();
    appMockStore.user.authorisationStatus = AuthorisationStatus.Auth;
    appMockStore.favorites.favoritesLoadingStatus = RequestStatus.Fulfilled;
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, appMockStore);
    mockHistory.push(AppPath.Favorites);

    render(withStoreComponent);

    expect(screen.getByTestId(FAVORITES_PAGE_TEST_ID)).toBeInTheDocument();
  });

  it('should render "Not found" when user navigate to not-existing route', () => {
    const EXPECTED_HEADER_TEXT = '404.Страница которую вы запрашиваете не найдена.';
    const EXPECTED_LINK_TEXT = 'Вернуться на главную страницу';
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent);
    const unknownRoute = '/unknown-route';
    mockHistory.push(unknownRoute);

    render(withStoreComponent);

    expect(screen.getByText(EXPECTED_HEADER_TEXT)).toBeInTheDocument();
    expect(screen.getByText(EXPECTED_LINK_TEXT)).toBeInTheDocument();
  });

  it('should render "LoginPage" when user navigates to "/login"', () => {
    const LOGIN_PAGE_TEST_ID = 'login-page-container';
    const appMockStore = makeFakeStore();
    appMockStore.user.authorisationStatus = AuthorisationStatus.NoAuth;
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, appMockStore);
    mockHistory.push(AppPath.Login);

    render(withStoreComponent);

    expect(screen.getByTestId(LOGIN_PAGE_TEST_ID)).toBeInTheDocument();
  });

  it('should render "OfferPage" when user navigates to "/offer/:id"', () => {
    const OFFER_PAGE_TEST_ID = 'offer page element';
    const fakeOffer = makeFakeOffersList()[0];
    const offerId = fakeOffer.id;
    const appMockStore = makeFakeStore();
    appMockStore.offerDetails.offerLoadingStatus = RequestStatus.Fulfilled;
    appMockStore.offerDetails.offerDetails = fakeOffer;
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, appMockStore);
    mockHistory.push(`/offer/${offerId}`);

    render(withStoreComponent);

    expect(screen.getByTestId(OFFER_PAGE_TEST_ID)).toBeInTheDocument();
  });
});
