import { Helmet } from 'react-helmet-async';
import { Link, Navigate } from 'react-router-dom';
import { AppPath, AuthorisationStatus, Locations, PASSWORD_REGEX } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getRandomArrayElement } from '../../helper';
import { selectAuthorisationStatus } from '../../store/user/user.selectors';
import { loginUserAction } from '../../store/api-actions';
import { FormEvent, useRef, useState } from 'react';
import styles from './login-page.module.css';
import { updateLocation } from '../../store/card-list/card-list.slice';

export default function LoginPage(): React.ReactNode {
  const dispatch = useAppDispatch();
  const authorisationStatus = useAppSelector(selectAuthorisationStatus);
  const locationsList = Object.values(Locations);
  const randomLocation = getRandomArrayElement<typeof locationsList[number]>(locationsList);
  const handleRandomClick = () => dispatch(updateLocation(randomLocation));
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const isPasswordValid = (pass: string): boolean => PASSWORD_REGEX.test(pass);
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (emailRef.current !== null &&
      passwordRef.current !== null &&
      isPasswordValid(passwordRef.current.value)) {
      dispatch(loginUserAction({
        email: emailRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };
  const [password, setPassword] = useState<string>('');
  return authorisationStatus === AuthorisationStatus.Auth
    ? <Navigate to={AppPath.Main} />
    :
    (
      <>
        <Helmet>
          <title>6 cities. Login page</title>
        </Helmet>
        <main className="page--main page__main--login">
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
                  <input
                    className="login__input form__input"
                    ref={passwordRef}
                    onChange={() => setPassword(passwordRef.current?.value ?? '')}
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                  {!isPasswordValid(password) &&
                    <div className={styles.passwordNotValid}>Password must contain at least one digit and one letter sign.</div>}
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <Link className="locations__item-link"
                  to={AppPath.Main} onClick={handleRandomClick}
                >
                  <span>{randomLocation}</span>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </>
    );

}
