import classNames from 'classnames';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import Location from '../../components/location/location';
import MainList from '../../components/main-list/main-list';
import { selectLocation, selectOffers } from '../../selectors';
import MainEmpty from '../../components/main-empty/main-empty';

export default function MainPage(): JSX.Element {
  const offers = useAppSelector(selectOffers);
  const activeLocation = useAppSelector(selectLocation);
  const filteredOffers = offers.filter((offer) => offer.city.name === activeLocation);
  const isEmptyList = !filteredOffers.length;

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities. Rental offers in European capitals</title>
      </Helmet>

      <main className={classNames('page__main page__main--index', {'page__main--index-empty': isEmptyList})}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Location />
          </section>
        </div>
        <div className="cities">
          <div className={classNames('cities__places-container', {'cities__places-container--empty': isEmptyList}, 'container')}>
            {isEmptyList ? <MainEmpty location={activeLocation} /> : <MainList offers={filteredOffers} />}
          </div>
        </div>
      </main>
    </div>
  );
}
