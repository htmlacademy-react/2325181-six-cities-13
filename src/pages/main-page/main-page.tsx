import classNames from 'classnames';
import {useEffect} from 'react';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import City from '../../components/location/location';
import MainList from '../../components/main-list/main-list';
import LoadingPage from '../loading-page/loading-page';
import { loadOffersAction, loadFavoritesAction } from '../../store/api-actions';
import { selectLocation } from '../../store/card-list/card-list-selectors';
import { selectOffers, selectDataErrorStatus, selectOffersLoadingStatus } from '../../store/offers/offers-selectors';
import MainEmpty from '../../components/main-empty/main-empty';
import ErrorPage from '../error-page/error-page';
import { isPending, isFulfilled } from '../../helper';

export default function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() =>{
    let isMounted = true;
    if (isMounted) {
      dispatch(loadOffersAction());
      dispatch(loadFavoritesAction());
    }
    return () => {
      isMounted = false;
    };
  },[dispatch]);
  const offers = useAppSelector(selectOffers);
  const activeLocation = useAppSelector(selectLocation);
  const filteredOffers = offers.filter((offer) => offer.city.name === activeLocation);
  const isEmptyList = !filteredOffers.length;
  const hasError = useAppSelector(selectDataErrorStatus);
  const offersLoadingStatus = useAppSelector(selectOffersLoadingStatus);
  return (
    <>
      {hasError && <ErrorPage />}
      {isPending(offersLoadingStatus) && <LoadingPage />}
      {!hasError && isFulfilled(offersLoadingStatus) &&
        <>
          <Helmet>
            <title>6 cities. Rental offers in European capitals</title>
          </Helmet>
          <main className={classNames('page__main page__main--index', {'page__main--index-empty': isEmptyList})}>
            <h1 className="visually-hidden">Cities</h1>
            <div className="tabs">
              <section className="locations container">
                <City />
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
