import { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { AppPath, AuthorisationStatus, RequestPage } from '../../const';
import {OffersType, ReviewsType, LocationType, ChangeLocationType} from '../../types/types';


type AppProps = {
  offers: OffersType;
  reviews: ReviewsType;
}

export default function App ({ offers, reviews}: AppProps): JSX.Element {
  const authorisationStatus = AuthorisationStatus.Auth;
  const [activeLocation, setActiveLocation] = useState<LocationType>('Paris');
  const changeLocation: ChangeLocationType = (location) => setActiveLocation(location);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppPath.Main}
          element={<MainPage offers={offers} activeLocation={activeLocation} changeLocation={changeLocation} />}
        />
        <Route
          path={AppPath.Favorites}
          element={
            <PrivateRoute authorisationStatus={authorisationStatus} requestPage={RequestPage.Favorites}>
              <FavoritesPage offers={offers} changeLocation={changeLocation} />
            </PrivateRoute>
          }
        />
        <Route
          path={AppPath.Login}
          element={
            <PrivateRoute authorisationStatus={authorisationStatus} requestPage={RequestPage.Login}>
              <LoginPage changeLocation={changeLocation} />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppPath.Offer}${AppPath.OfferId}`}
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
