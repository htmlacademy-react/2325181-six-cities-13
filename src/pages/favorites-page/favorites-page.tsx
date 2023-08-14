import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import FavoritesList from '../../components/favorites-list/favorites-list';
import Logo from '../../components/logo/logo';
import { LocationReducerType } from '../../types/types';
import { selectOffers } from '../../store/offers/offers.selectors';

export default function FavoritesPage (): JSX.Element {
  const offers = useAppSelector(selectOffers);
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const groupByLocation = Object.entries(favoriteOffers.reduce<LocationReducerType>((location, offer) => {
    const { name } = offer.city;
    location[name] = location[name] ?? [];
    location[name].push(offer);
    return location;
  }, {}));
  return (
    <div className="page">
      <Helmet>
        <title>6 cities. Favorite offers</title>
      </Helmet>

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
