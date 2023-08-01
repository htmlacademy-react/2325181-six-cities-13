import { Navigate } from 'react-router-dom';
import { ReactNode, PropsWithChildren } from 'react';
import { useAppSelector } from '../../hooks';
import { AppPath, AuthorisationStatus } from '../../const';

type PrivateRouteProps = PropsWithChildren;

export default function PrivateRoute ({children}: PrivateRouteProps): ReactNode {
  const authorisationStatus = useAppSelector((state) => state.authorisationStatus);
  return (
    authorisationStatus === AuthorisationStatus.Auth
      ? children
      : <Navigate to={AppPath.Login} />
  );
}
