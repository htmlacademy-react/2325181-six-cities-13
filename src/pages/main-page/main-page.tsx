import { useState } from 'react';
import { Link } from 'react-router-dom';
import SignIn from '../../components/sign-in/sign-in';
import Logo from '../../components/logo/logo';
import Location from '../../components/location/location';
import Sort from '../../components/sort/sort';
import Map from '../../components/map/map';
import CardList from '../../components/card-list/card-list';
import { ChangeLocationType, LocationType, OffersType } from '../../types/types';
import { AppPath } from '../../const';


type MainPageProps = {
  offers: OffersType;
  activeLocation: LocationType;
  changeLocation: ChangeLocationType;
}

export default function MainPage({offers, activeLocation, changeLocation}: MainPageProps): JSX.Element {
  const [activeLogo, setActiveLogo] = useState('--active');
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link
                className={`header__logo-link header__logo-link${activeLogo}`}
                onMouseEnter={() => setActiveLogo('')}
                onMouseLeave={() => setActiveLogo('--active')}
                to={AppPath.Main}
              >
                <Logo />
              </Link>
            </div>
            <SignIn />
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Location
              activeLocation={activeLocation}
              changeLocation={changeLocation}
            />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {activeLocation}</b>
              <Sort />
              <div className="cities__places-list places__list tabs__content">
                <CardList offers={offers} />
              </div>
            </section>
            <div className="cities__right-section">
              <Map />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
