import { Navigate } from 'react-router-dom';
import { AppPaths, AuthorisationStatus } from '../../const';

type PrivateRouteProps = {
  authorisationStatus: typeof AuthorisationStatus[keyof typeof AuthorisationStatus];
  children: JSX.Element;
}

export default function PrivateRoute ({authorisationStatus, children}: PrivateRouteProps): JSX.Element {
  return (
    authorisationStatus === AuthorisationStatus.Auth
      ? children
      : <Navigate to={AppPaths.Login}></Navigate>
  );
}
