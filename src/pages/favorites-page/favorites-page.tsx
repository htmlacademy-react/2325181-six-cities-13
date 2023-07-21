import SignIn from '../../components/sign-in/sign-in';
import FavoritesList from '../../components/favorites-list/favorites-list';
import Logo from '../../components/logo/logo';
import { OffersType, LocationReducerType } from '../../types/types';

type FavoritesPageProps = {
  offers: OffersType;
}

export default function FavoritesPage ({offers}: FavoritesPageProps): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const groupByLocation = Object.entries(favoriteOffers.reduce<LocationReducerType>((location, offer) => {
    const { name } = offer.city;
    location[name] = location[name] ?? [];
    location[name].push(offer);
    return location;
  }, {}));
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <SignIn />
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoriteOffers.length
            ?
            <FavoritesList groupByLocation={groupByLocation} />
            :
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </section>}
        </div>
      </main>
      <footer className="footer container">
        <Logo isFooterLogo />
      </footer>
    </div>
  );
}
