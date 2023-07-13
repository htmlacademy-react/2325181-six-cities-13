import {Link} from 'react-router-dom';
import { Fragment } from 'react';

export default function NotFoundPage (): JSX.Element {
  return (
    <Fragment>
      <div className="page page--gray">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link className="header__logo-link" to="/">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </Link>
              </div>
            </div>
          </div>

        </header>
      </div>
      <main className="page__main">
        <h1>404.Страница которую вы запрашиваете не найдена.</h1>
        <Link to='/'>Вернуться на главную страницу</Link>
      </main>
    </Fragment>
  );
}
