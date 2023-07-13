import { Navigate } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { AppPaths, AuthorisationStatus } from '../../const';

type PrivateRouteProps = PropsWithChildren<{
  authorisationStatus: typeof AuthorisationStatus[keyof typeof AuthorisationStatus];
}>

export default function PrivateRoute ({authorisationStatus, children}: PrivateRouteProps): JSX.Element {
  return (
    authorisationStatus === AuthorisationStatus.Auth
      ? children
      : <Navigate to={AppPaths.Login}></Navigate>
  );
}
