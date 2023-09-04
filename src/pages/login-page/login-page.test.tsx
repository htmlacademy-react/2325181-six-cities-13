import {render, screen} from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import LoginPage from './login-page';

describe('Component: Login Page', () => {
  it('should render correctly', () => {
    const LOGIN_TEST_ID = 'login-page-container';
    const {withStoreComponent} = withStore(<LoginPage />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByTestId(LOGIN_TEST_ID)).toBeInTheDocument();

  });
});

