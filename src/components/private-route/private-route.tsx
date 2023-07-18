import { Navigate } from 'react-router-dom';
import { ReactNode, PropsWithChildren } from 'react';
import { AppPath, AuthorisationStatus, RequestPage } from '../../const';
import type { AuthorisationStatusType, RequestPageType} from '../../types/types';

type PrivateRouteProps = PropsWithChildren<{
  authorisationStatus: AuthorisationStatusType;
  requestPage: RequestPageType;
}>

export default function PrivateRoute ({authorisationStatus, requestPage, children}: PrivateRouteProps): ReactNode {
  const isAuthorised = authorisationStatus === AuthorisationStatus.Auth;
  const isFavoritesRequested = requestPage === RequestPage.Favorites;
  return (
    isAuthorised && isFavoritesRequested ||
    !isAuthorised && !isFavoritesRequested
      ? children
      : !isAuthorised && <Navigate to={AppPath.Login}></Navigate> ||
        isAuthorised && <Navigate to={AppPath.Main}></Navigate>
  );
}
