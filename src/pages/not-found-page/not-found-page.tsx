import {Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { AppPath } from '../../const';

export default function NotFoundPage (): JSX.Element {
  return (
    <div className="page page--gray">
      <Helmet>
        <title>6 cities. Page not found</title>
      </Helmet>

      <main className="page__main">
        <h1>404.Страница которую вы запрашиваете не найдена.</h1>
        <Link to={AppPath.Main}>Вернуться на главную страницу</Link>
      </main>
    </div>

  );
}
