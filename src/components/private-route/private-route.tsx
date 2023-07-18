import { Navigate } from 'react-router-dom';
import { PropsWithChildren, ReactNode } from 'react';
import { AppPath, AuthorisationStatus } from '../../const';
import type { AuthorisationStatusType} from '../../types/types';

type PrivateRouteProps = PropsWithChildren<AuthorisationStatusType>

export default function PrivateRoute ({authorisationStatus, children}: PrivateRouteProps): ReactNode {
  return (
    authorisationStatus === AuthorisationStatus.Auth
      ? children
      : <Navigate to={AppPath.Login}></Navigate>
  );
}
