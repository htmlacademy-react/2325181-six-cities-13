import { Outlet } from 'react-router-dom';
import Logo from '../logo/logo';
import SignIn from '../sign-in/sign-in';

export default function Layout ():JSX.Element {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <SignIn />
          </div>
        </div>
      </header>
      <Outlet />
    </>

  );
}
