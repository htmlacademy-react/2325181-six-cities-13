import { Navigate } from 'react-router-dom';
import { ReactNode, PropsWithChildren } from 'react';
import { useAppSelector } from '../../hooks';
import { AppPath, AuthorisationStatus } from '../../const';
import { selectAuthorisationStatus } from '../../store/user/user-selectors';
import LoadingPage from '../../pages/loading-page/loading-page';

type PrivateRouteProps = PropsWithChildren;

export default function PrivateRoute ({children}: PrivateRouteProps): ReactNode {
  const authorisationStatus = useAppSelector(selectAuthorisationStatus);
  if (authorisationStatus === AuthorisationStatus.Unknown) {
    return <LoadingPage />;
  }
  return (
    authorisationStatus === AuthorisationStatus.Auth
      ? children
      : <Navigate to={AppPath.Login} />
  );
}
