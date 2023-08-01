import classNames from 'classnames';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import SignIn from '../../components/sign-in/sign-in';
import Logo from '../../components/logo/logo';
import Location from '../../components/location/location';
import MainList from '../../components/main-list/main-list';
import { getOffersCoordinates } from '../../helper';
import MapMain from '../../components/map-main/map-main';
import { LocationType } from '../../types/types';

type EmptyListProps = {
  location: LocationType;
}

function EmptyList({location}: EmptyListProps):JSX.Element {
  return (
    <section className="cities__no-places">
      <div className="cities__status-wrapper tabs__content">
        <b className="cities__status">No places to stay available</b>
        <p className="cities__status-description">We could not find any property available at the moment in {location}</p>
      </div>
    </section>
  );
}

export default function MainPage(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const [offerId, setOfferId] = useState('');
  const activeLocation = useAppSelector((state) => state.location);
  const filteredOffers = offers.filter((offer) => offer.city.name === activeLocation);
  const isEmptyList = !filteredOffers.length;
  const offersCoordinates = getOffersCoordinates(filteredOffers);

  return (
    <div className="page page--gray page--main">
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

      <main className={classNames('page__main page__main--index', {'page__main--index-empty': isEmptyList})}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Location />
          </section>
        </div>
        <div className="cities">
          <div className={classNames('cities__places-container', {'cities__places-container--empty': isEmptyList}, 'container')}>
            {isEmptyList && <EmptyList location={activeLocation} />}
            {!isEmptyList && <MainList onCardHover={(id) => setOfferId(id)} onCardLeave={() => setOfferId('')} offers={filteredOffers} />}
            <div className="cities__right-section">
              {!isEmptyList && <MapMain offers={offersCoordinates} location={activeLocation} selectedOfferId={offerId}/>}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
