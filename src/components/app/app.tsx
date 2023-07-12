import MainPage from '../../pages/main-page/main-page';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppPaths } from '../../const';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';


type AppProps = {
  placeCardNumber: number;
}

export default function App ({placeCardNumber}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppPaths.Main}
          element={<MainPage placeCardNumber={placeCardNumber} />}
        />
        <Route
          path={AppPaths.Favorites}
          element={<FavoritesPage />}
        />
        <Route
          path={AppPaths.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppPaths.Offer}
          element={<OfferPage />}
        />
        <Route
          path={AppPaths.NotFound}
          element={<NotFoundPage />}
        />

      </Routes>
    </BrowserRouter>
  );
}
