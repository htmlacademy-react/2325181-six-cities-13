import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withHistory, withStore } from '../../utils/mock-component';
import LoginPage from './login-page';

describe('Component: Login Page', () => {
  it('should render correctly', () => {
    const emailText = 'E-mail';
    const passwordText = 'Password';
    const {withStoreComponent} = withStore(<LoginPage/ >, {});
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByText(emailText)).toBeInTheDocument();
    expect(screen.getByText(passwordText)).toBeInTheDocument();

  });
});
