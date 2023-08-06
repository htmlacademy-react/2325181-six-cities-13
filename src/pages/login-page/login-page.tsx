import { Helmet } from 'react-helmet-async';
import { Link, Navigate } from 'react-router-dom';
import { AppPath, AuthorisationStatus, Locations } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getRandomArrayElement } from '../../helper';
import { selectAuthorisationStatus } from '../../selectors';
import { authoriseUserAction } from '../../store/api-actions';
import { FormEvent, useRef } from 'react';

export default function LoginPage(): React.ReactNode {
  const authorisationStatus = useAppSelector(selectAuthorisationStatus);
  const locationsList = Object.values(Locations);
  const randomLocation = getRandomArrayElement<typeof locationsList[number]>(locationsList);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (emailRef.current !== null && passwordRef.current !== null) {
      dispatch(authoriseUserAction({
        email: emailRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };
  return authorisationStatus === AuthorisationStatus.Auth
    ? <Navigate to={AppPath.Main} />
    :
    (
      <div className="page page--gray page--login">
        <Helmet>
          <title>6 cities. Login page</title>
        </Helmet>

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" onSubmit={handleSubmit} action="#" method="post">
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input className="login__input form__input" ref= {emailRef} type="email" name="email" placeholder="Email" required/>
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input className="login__input form__input" ref={passwordRef} type="password" name="password" placeholder="Password" required/>
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <Link className="locations__item-link"
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
