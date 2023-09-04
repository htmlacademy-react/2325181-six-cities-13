import SignIn from './sign-in';
import { withStore, withHistory } from '../../utils/mock-component';
import { render, screen } from '@testing-library/react';
import { makeFakeStore } from '../../utils/mocks';
import { AuthorisationStatus } from '../../const';

describe('Component: Sign in', () => {
  it('should render "Sign out" text when user is authorised', () => {
    const SIGN_IN_TEST_ID = 'SignInElement';
    const USER_ACCOUNT_TEXT = 'Sign out';
    const USER_LOGIN_TEXT = 'Sign in';
    const signInMockStore = makeFakeStore();
    signInMockStore.user.authorisationStatus = AuthorisationStatus.Auth;
    const {withStoreComponent} = withStore(<SignIn />, signInMockStore);
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);
    expect(screen.getByTestId(SIGN_IN_TEST_ID)).toBeInTheDocument();
    expect(screen.getByText(USER_ACCOUNT_TEXT)).toBeInTheDocument();
    expect(screen.queryByText(USER_LOGIN_TEXT)).not.toBeInTheDocument();
  });

  it('should render "Sign in" text when user is not authorised', () => {
    const SIGN_IN_TEST_ID = 'SignInElement';
    const userAccountText = 'Sign out';
    const USER_LOGIN_TEXT = 'Sign in';
    const signInMockStore = makeFakeStore();
    signInMockStore.user.authorisationStatus = AuthorisationStatus.NoAuth;
    const {withStoreComponent} = withStore(<SignIn />, signInMockStore);
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);
    expect(screen.getByTestId(SIGN_IN_TEST_ID)).toBeInTheDocument();
    expect(screen.getByText(USER_LOGIN_TEXT)).toBeInTheDocument();
    expect(screen.queryByText(userAccountText)).not.toBeInTheDocument();
  });
});
