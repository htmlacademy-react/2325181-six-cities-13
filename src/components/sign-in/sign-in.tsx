import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectAuthorisationStatus, selectEmail } from '../../selectors';
import { AppPath, AuthorisationStatus } from '../../const';
import { logoutUserAction } from '../../store/api-actions';

function UserLogin():JSX.Element {
  return (
    <li className="header__nav-item user">
      <Link className="header__nav-link header__nav-link--profile" to={AppPath.Login}>
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__login">Sign in</span>
      </Link>
    </li>
  );
}

function UserAccount():JSX.Element {
  const dispatch = useAppDispatch();
  const email = useAppSelector(selectEmail);
  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppPath.Favorites}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{email}</span>
          <span className="header__favorite-count">3</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link
          className="header__nav-link"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutUserAction());
          }}
          to={AppPath.Login}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </>
  );
}

export default function SignIn(): JSX.Element {
  const isAuthorised = useAppSelector(selectAuthorisationStatus);
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {isAuthorised === AuthorisationStatus.Auth
          ? <UserAccount />
          : <UserLogin />}
      </ul>
    </nav>
  );
}
