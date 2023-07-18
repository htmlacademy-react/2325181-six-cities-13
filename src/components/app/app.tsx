import MainPage from '../../pages/main-page/main-page';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppPath, AuthorisationStatus } from '../../const';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import {Offers, Reviews} from '../../types/types';


type AppProps = {
  offers: Offers;
  reviews: Reviews;
}

export default function App ({ offers, reviews}: AppProps): JSX.Element {
  const authorisationStatus = AuthorisationStatus.Auth;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppPath.Main}
          element={<MainPage offers={offers} />}
        />
        <Route
          path={AppPath.Favorites}
          element={
            <PrivateRoute authorisationStatus={authorisationStatus}>
              <FavoritesPage offers={offers} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppPath.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppPath.Offer}
          element={<OfferPage authorisationStatus={authorisationStatus} />}
        />
        <Route
          path={AppPath.NotFound}
          element={<NotFoundPage />}
        />

      </Routes>
    </BrowserRouter>
  );
}
