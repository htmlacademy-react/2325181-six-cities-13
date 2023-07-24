
import { useState } from 'react';

import SignIn from '../../components/sign-in/sign-in';
import Logo from '../../components/logo/logo';
import Location from '../../components/location/location';
import Sort from '../../components/sort/sort';
import Map from '../../components/map/map';
import CardList from '../../components/card-list/card-list';
import { OffersType } from '../../types/types';
import { Locations } from '../../const';


type MainPageProps = {
  offers: OffersType;

}

export default function MainPage({offers}: MainPageProps): JSX.Element {
  const [offerId, setOfferId] = useState('');
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
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
              <Sort />
              <div className="cities__places-list places__list tabs__content">
                <CardList onCardHover={(id) => setOfferId(id)} onCardLeave={() => setOfferId('')} offers={offers} />
              </div>
            </section>
            <div className="cities__right-section">
              <Map offers={offers} location={Locations.Amsterdam} selectedOfferId={offerId}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
