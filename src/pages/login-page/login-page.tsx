import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import { AppPath, Locations } from '../../const';

import { getRandomArrayElement } from '../../helper';
import { ChangeLocationType } from '../../types/types';

type LoginPageProps = {
  changeLocation: ChangeLocationType;
}

export default function LoginPage({changeLocation}: LoginPageProps): JSX.Element {
  const locationsList = Object.values(Locations);
  const randomLocation = getRandomArrayElement<typeof locationsList[number]>(locationsList);
  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppPath.Main}>
                <Logo />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link"
                onClick={() => changeLocation(randomLocation)}
                to={AppPath.Main}
              >
                <span>{randomLocation}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
