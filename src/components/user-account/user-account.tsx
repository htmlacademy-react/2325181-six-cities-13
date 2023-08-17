import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectEmail } from '../../store/user/user.selectors';
import { AppPath } from '../../const';
import { logoutUserAction } from '../../store/api-actions';
import { selectFavorites } from '../../store/favorties/favorites.selectors';

export default function UserAccount():JSX.Element {
  const dispatch = useAppDispatch();
  const email = useAppSelector(selectEmail);
  const favoritesCount = useAppSelector(selectFavorites).length;
  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppPath.Favorites}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{email}</span>
          <span className="header__favorite-count">{favoritesCount}</span>
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
