import { Link } from 'react-router-dom';
import SignIn from '../../components/sign-in/sign-in';
import PlaceCard from '../../components/place-card/place-card';
import Logo from '../../components/logo/logo';
import { AppPath, CardFormat} from '../../const';
import { OffersType, OfferType, ChangeLocationType, LocationType } from '../../types/types';

type FavoritesPageProps = {
  offers: OffersType;
  changeLocation: ChangeLocationType;
}

type LocationReducerType = {
  [name: string]: OffersType;
};

export default function FavoritesPage ({offers, changeLocation}: FavoritesPageProps): JSX.Element {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);
  const groupByLocation = Object.entries(favoriteOffers.reduce((location: LocationReducerType, offer: OfferType) => {
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
              <Link className="header__logo-link" to={AppPath.Main}>
                <Logo />
              </Link>
            </div>
            <SignIn />
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          { favoriteOffers.length ?
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {groupByLocation.map(([locationName, locationOffers]) => (
                  <li className="favorites__locations-items" key={locationName}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link className="locations__item-link"
                          onClick={() => changeLocation(locationName as LocationType)}
                          to={AppPath.Main}
                        >
                          <span>{locationName}</span>
                        </Link>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {locationOffers.map(
                        (offer) => <PlaceCard key={offer.id} offer={offer} cardFormat={CardFormat.Favorites} />
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section> :
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
        <Link className="footer__logo-link" to={AppPath.Main}>
          <Logo isFooterLogo />
        </Link>
      </footer>
    </div>
  );
}
