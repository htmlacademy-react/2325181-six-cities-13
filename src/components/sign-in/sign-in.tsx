import UserLogin from '../user-login/user-login';
import UserAccount from '../user-account/user-account';
import { useAppSelector } from '../../hooks';
import { selectAuthorisationStatus } from '../../store/user/user-selectors';
import { AuthorisationStatus } from '../../const';

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
