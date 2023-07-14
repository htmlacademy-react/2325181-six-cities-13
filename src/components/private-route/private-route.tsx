import { Navigate } from 'react-router-dom';
import { PropsWithChildren, ReactNode } from 'react';
import { AppPath, AuthorisationStatus } from '../../const';

type PrivateRouteProps = PropsWithChildren<{
  authorisationStatus: typeof AuthorisationStatus[keyof typeof AuthorisationStatus];
}>

export default function PrivateRoute ({authorisationStatus, children}: PrivateRouteProps): ReactNode {
  return (
    authorisationStatus === AuthorisationStatus.Auth
      ? children
      : <Navigate to={AppPath.Login}></Navigate>
  );
}
