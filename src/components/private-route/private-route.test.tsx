import { MemoryHistory, createMemoryHistory } from 'history';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './private-route';
import { AppPath, AuthorisationStatus } from '../../const';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mocks';
import { render, screen } from '@testing-library/react';

describe('Component: Private Route', () => {
  let mockHistory: MemoryHistory;

  beforeAll(() => {
    mockHistory = createMemoryHistory();
  });

  beforeEach(() => {
    mockHistory.push(AppPath.Favorites);
  });

  it('should render component for public route, when user not authorised', () => {
    const EXPECTED_TEXT = 'public route';
    const NOT_EXPECTED_TEXT = 'private route';
    const privateRouteMockStore = makeFakeStore();
    privateRouteMockStore.user.authorisationStatus = AuthorisationStatus.NoAuth;
    const withHistoryComponent = withHistory(
      <Routes>
        <Route path={AppPath.Login} element={<span>{EXPECTED_TEXT}</span>} />
        <Route path={AppPath.Favorites} element={
          <PrivateRoute>
            <span>{NOT_EXPECTED_TEXT}</span>
          </PrivateRoute>
        }
        />
      </Routes>,
      mockHistory
    );
    const {withStoreComponent} = withStore(withHistoryComponent, privateRouteMockStore);

    render(withStoreComponent);
    expect(screen.getByText(EXPECTED_TEXT)).toBeInTheDocument();
    expect(screen.queryByText(NOT_EXPECTED_TEXT)).not.toBeInTheDocument();
  });

  it('should render component for private route, when user authorised', () => {
    const EXPECTED_TEXT = 'private route';
    const NOT_EXPECTED_TEXT = 'public route';
    const privateRouteMockStore = makeFakeStore();
    privateRouteMockStore.user.authorisationStatus = AuthorisationStatus.Auth;
    const withHistoryComponent = withHistory(
      <Routes>
        <Route path={AppPath.Login} element={<span>{NOT_EXPECTED_TEXT}</span>} />
        <Route path={AppPath.Favorites} element={
          <PrivateRoute>
            <span>{EXPECTED_TEXT}</span>
          </PrivateRoute>
        }
        />
      </Routes>,
      mockHistory
    );
    const {withStoreComponent} = withStore(withHistoryComponent, privateRouteMockStore);

    render(withStoreComponent);
    expect(screen.getByText(EXPECTED_TEXT)).toBeInTheDocument();
    expect(screen.queryByText(NOT_EXPECTED_TEXT)).not.toBeInTheDocument();
  });
});
