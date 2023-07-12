import {Link} from 'react-router-dom';
import { Fragment } from 'react';

export default function NotFoundPage (): JSX.Element {
  return (
    <Fragment>
      <h1>404.Страница которую вы запрашиваете не найдена.</h1>
      <Link to='/'>Вернуться на главную страницу</Link>
    </Fragment>
  );
}
