import {Link } from 'react-router-dom';
import { AppPath } from '../../const';
import Logo from '../../components/logo/logo';

export default function NotFoundPage (): JSX.Element {
  return (
    <>
      <div className="page page--gray">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Logo />
              </div>
            </div>
          </div>

        </header>
      </div>
      <main className="page__main">
        <h1>404.Страница которую вы запрашиваете не найдена.</h1>
        <Link to={AppPath.Main}>Вернуться на главную страницу</Link>
      </main>
    </>
  );
}
