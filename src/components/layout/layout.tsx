import { Outlet } from 'react-router-dom';
import Logo from '../logo/logo';
import SignIn from '../sign-in/sign-in';
import LoadingPage from '../../pages/loading-page/loading-page';
import { useAppSelector } from '../../hooks';
import { selectDataLoadingStatus } from '../../selectors';

export default function Layout ():JSX.Element {
  const isDataLoading = useAppSelector(selectDataLoadingStatus);
  if (isDataLoading) {
    return <LoadingPage />;
  }
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <SignIn />
          </div>
        </div>
      </header>
      <Outlet />
    </>

  );
}
