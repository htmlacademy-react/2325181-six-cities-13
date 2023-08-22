import { Navigate } from 'react-router-dom';
import { ReactNode, PropsWithChildren } from 'react';
import { useAppSelector } from '../../hooks';
import { AppPath, AuthorisationStatus } from '../../const';
import { selectAuthorisationStatus } from '../../store/user/user-selectors';

type PrivateRouteProps = PropsWithChildren;

export default function PrivateRoute ({children}: PrivateRouteProps): ReactNode {
  const authorisationStatus = useAppSelector(selectAuthorisationStatus);
  return (
    authorisationStatus === AuthorisationStatus.Auth
      ? children
      : <Navigate to={AppPath.Login} />
  );
}
