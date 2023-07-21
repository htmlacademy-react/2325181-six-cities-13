import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { AppPath, AuthorisationStatus } from '../../const';
import {OffersType, ReviewsType } from '../../types/types';


type AppProps = {
  offers: OffersType;
  reviews: ReviewsType;
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
          element={<LoginPage authorisationStatus={authorisationStatus} />}
        />
        <Route
          path={AppPath.Offer}
          element={<OfferPage offers={offers} reviews={reviews} authorisationStatus={authorisationStatus} />}
        />
        <Route
          path={AppPath.NotFound}
          element={<NotFoundPage />}
        />

      </Routes>
    </BrowserRouter>
  );
}
