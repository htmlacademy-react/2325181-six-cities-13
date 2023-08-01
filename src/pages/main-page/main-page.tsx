
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import SignIn from '../../components/sign-in/sign-in';
import Logo from '../../components/logo/logo';
import Location from '../../components/location/location';
import MainList from '../../components/main-list/main-list';
import { getOffersCoordinates } from '../../helper';
import MapMain from '../../components/map-main/map-main';

export default function MainPage(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const [offerId, setOfferId] = useState('');
  const activeLocation = useAppSelector((state) => state.location);
  const filteredOffers = offers.filter((offer) => offer.city.name === activeLocation);
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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <Location />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <MainList onCardHover={(id) => setOfferId(id)} onCardLeave={() => setOfferId('')} offers={filteredOffers} />
            </section>
            <div className="cities__right-section">
              <MapMain offers={offersCoordinates} location={activeLocation} selectedOfferId={offerId}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
