import classNames from 'classnames';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import Location from '../../components/location/location';
import MainList from '../../components/main-list/main-list';
import MapMain from '../../components/map-main/map-main';
import { LocationType, OffersType } from '../../types/types';
import { selectLocation, selectOffers } from '../../selectors';

type EmptyListProps = {
  location: LocationType;
}

type MainListWithMapProps = {
  filteredOffers: OffersType;
}

function EmptyList({location}: EmptyListProps):JSX.Element {
  return (
    <>
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property available at the moment in {location}</p>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </>
  );
}


function MainListWithMap({filteredOffers}: MainListWithMapProps): JSX.Element {
  return (
    <>
      <MainList offers={filteredOffers} />
      <div className="cities__right-section">
        <MapMain offers={filteredOffers} />
      </div>
    </>
  );
}


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
            {isEmptyList ? <EmptyList location={activeLocation} /> : <MainListWithMap filteredOffers={filteredOffers} />}
          </div>
        </div>
      </main>
    </div>
  );
}
