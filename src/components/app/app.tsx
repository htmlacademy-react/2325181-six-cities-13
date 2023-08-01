import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { AppPath } from '../../const';


export default function App (): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppPath.Main}
          element={<MainPage />}
        />
        <Route
          path={AppPath.Favorites}
          element={
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppPath.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppPath.Offer}
          element={<OfferPage />}
        />
        <Route
          path={AppPath.NotFound}
          element={<NotFoundPage />}
        />

      </Routes>
    </BrowserRouter>
  );
}
