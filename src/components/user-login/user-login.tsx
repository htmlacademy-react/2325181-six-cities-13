import {memo} from 'react';
import { Link } from 'react-router-dom';
import { AppPath } from '../../const';

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

export const UserLoginMemo = memo(UserLogin);
