import PlaceCard from '../../components/place-card/place-card';
import SignIn from '../../components/sign-in/sign-in';
import Location from '../../components/location/location';
import Sort from '../../components/sort/sort';
import Map from '../../components/map/map';


type MainPageProps = {
  placeCardNumber: number;
}

export default function MainPage({placeCardNumber}: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
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
              <b className="places__found">{placeCardNumber} places to stay in Amsterdam</b>
              <Sort />
              <div className="cities__places-list places__list tabs__content">
                {Array.from(
                  {length: placeCardNumber},
                  (_, index: number) => <PlaceCard key={index}></PlaceCard>
                )}

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
