import { useAppSelector } from '../../hooks';
import { selectAuthorisationStatus } from '../../selectors';
import { AuthorisationStatus } from '../../const';
import UserLogin from '../user-login/user-login';
import UserAccount from '../user-account/user-account';

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
