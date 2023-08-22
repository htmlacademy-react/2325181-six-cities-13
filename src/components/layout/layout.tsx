import { Outlet, useLocation } from 'react-router-dom';
import LoadingPage from '../../pages/loading-page/loading-page';
import { useAppSelector } from '../../hooks';
import { selectDataLoadingStatus } from '../../store/offers/offers.selectors';
import { isLoginPage, isMainPage, isFavoritesPage} from '../../helper';
import { selectFavorites } from '../../store/favorties/favorites.selectors';
import { AppPathType } from '../../types/types';
import classNames from 'classnames';

type LayoutProps = {
  logo: JSX.Element;
  signin: JSX.Element;
}

export default function Layout ({logo, signin}: LayoutProps):JSX.Element {
  const currentPath = useLocation().pathname as AppPathType;
  const isLogin = isLoginPage(currentPath);
  const isMain = isMainPage(currentPath);
  const isFavorites = isFavoritesPage(currentPath);
  const isFavoritesEmpty = Boolean(!useAppSelector(selectFavorites).length) && isFavorites;
  const isDataLoading = useAppSelector(selectDataLoadingStatus);
  if (isDataLoading) {
    return <LoadingPage />;
  }
  return (
    <div className={classNames('page', {
      'page--gray page--login': isLogin,
      'page--gray page--main': isMain,
      'page--favorites-empty': isFavoritesEmpty})}
    >
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              {logo}
            </div>
            {!isLogin && signin}
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
