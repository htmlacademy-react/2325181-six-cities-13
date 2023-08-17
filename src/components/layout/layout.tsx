import { Outlet } from 'react-router-dom';
import LoadingPage from '../../pages/loading-page/loading-page';
import { useAppSelector } from '../../hooks';
import { selectDataLoadingStatus } from '../../store/offers/offers.selectors';

type LayoutProps = {
  logo: JSX.Element;
  signin: JSX.Element;
}

export default function Layout ({logo, signin}: LayoutProps):JSX.Element {
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
              {logo}
            </div>
            {signin}
          </div>
        </div>
      </header>
      <Outlet />
    </>

  );
}
