import {useEffect} from 'react';
import classNames from 'classnames';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import FavoritesList from '../../components/favorites-list/favorites-list';
import Logo from '../../components/logo/logo';
import LoadingPage from '../loading-page/loading-page';
import { selectFavorites, selectFavoritesLoadingStatus, } from '../../store/favorties/favorites-selectors';
import { loadFavoritesAction } from '../../store/api-actions';
import { LocationReducerType } from '../../types/types';
import ErrorPage from '../error-page/error-page';
import { isPending, isFulfilled, isRejected } from '../../helper';

export default function FavoritesPage (): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() =>{
    let isMounted = true;
    if (isMounted) {
      dispatch(loadFavoritesAction());
    }
    return () => {
      isMounted = false;
    };
  },[dispatch]);
  const favoritesLoadingStatus = useAppSelector(selectFavoritesLoadingStatus);
  const favoriteOffers = useAppSelector(selectFavorites);
  const isEmpty = favoriteOffers.length === 0;
  const groupByLocation = Object.entries(favoriteOffers.reduce<LocationReducerType>((location, offer) => {
    const { name } = offer.city;
    location[name] = location[name] ?? [];
    location[name].push(offer);
    return location;
  }, {}));
  return (
    <>
      {isPending(favoritesLoadingStatus) && <LoadingPage />}
      {isRejected(favoritesLoadingStatus) && <ErrorPage />}
      {isFulfilled(favoritesLoadingStatus) &&
      <div className="page">
        <Helmet>
          <title>6 cities. Favorite offers</title>
        </Helmet>
        <main className={classNames('page__main page__main--favorites', {
          'page__main--favorites-empty': isEmpty})}
        >
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
      </div>}
    </>
  );
}
