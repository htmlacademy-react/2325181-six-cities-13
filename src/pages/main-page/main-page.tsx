import classNames from 'classnames';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
// import Location from '../../components/location/location';
import LocationContainer from '../../components/location-container/location-container';
import MainList from '../../components/main-list/main-list';
import { selectLocation } from '../../store/card-list/card-list.selectors';
import { selectOffers, selectDataErrorStatus } from '../../store/offers/offers.selectors';
import MainEmpty from '../../components/main-empty/main-empty';
import ErrorPage from '../error-page/error-page';

export default function MainPage(): JSX.Element {
  const offers = useAppSelector(selectOffers);
  const activeLocation = useAppSelector(selectLocation);
  const filteredOffers = offers.filter((offer) => offer.city.name === activeLocation);
  const isEmptyList = !filteredOffers.length;
  const hasError = useAppSelector(selectDataErrorStatus);
  return (
    <>
      {hasError && <ErrorPage />}
      {!hasError &&
        <>
          <Helmet>
            <title>6 cities. Rental offers in European capitals</title>
          </Helmet>
          <main className={classNames('page__main page__main--index', {'page__main--index-empty': isEmptyList})}>
            <h1 className="visually-hidden">Cities</h1>
            <div className="tabs">
              <section className="locations container">
                <LocationContainer />
              </section>
            </div>
            <div className="cities">
              <div className={classNames('cities__places-container', {'cities__places-container--empty': isEmptyList}, 'container')}>
                {isEmptyList ? <MainEmpty location={activeLocation} /> : <MainList offers={filteredOffers} />}
              </div>
            </div>
          </main>
        </>}
    </>
  );
}
