import { Outlet, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import LoadingPage from '../../pages/loading-page/loading-page';
import Logo from '../logo/logo';
import SignIn from '../sign-in/sign-in';
import { useAppSelector } from '../../hooks';
import { selectDataLoadingStatus } from '../../store/offers/offers-selectors';
import { selectFavorites } from '../../store/favorties/favorites-selectors';
import { isLoginPage, isMainPage, isFavoritesPage} from '../../helper';
import { AppPathType } from '../../types/types';

export default function Layout ():JSX.Element {
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
              <Logo />
            </div>
            {!isLogin && <SignIn />}
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
