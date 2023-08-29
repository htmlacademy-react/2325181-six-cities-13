import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Navigate } from 'react-router-dom';
import UserAuthentication from '../../components/user-authentication/user-authentication';
import { selectAuthorisationStatus } from '../../store/user/user-selectors';
import { updateLocation } from '../../store/card-list/card-list-slice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { AppPath, AuthorisationStatus, Location } from '../../const';
import { getRandomArrayElement } from '../../helper';

export default function LoginPage(): ReactNode {
  const dispatch = useAppDispatch();
  const authorisationStatus = useAppSelector(selectAuthorisationStatus);
  const locationsList = Object.values(Location);
  const randomLocation = getRandomArrayElement<typeof locationsList[number]>(locationsList);
  const handleRandomClick = () => dispatch(updateLocation(randomLocation));
  return authorisationStatus === AuthorisationStatus.Auth
    ? <Navigate to={AppPath.Main} />
    :
    (
      <>
        <Helmet>
          <title>6 cities. Login page</title>
        </Helmet>
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <UserAuthentication />
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
