import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserAuthentication from './user-authentication';
import { withHistory, withStore } from '../../utils/mock-component';

describe('Component: User Authentication',() => {
  it('should render correctly', () => {
    const EMAIL_TEST_ID = 'emailElement';
    const PASSWORD_TEST_ID = 'passwordElement';
    const EMAIL_TEXT = 'E-mail';
    const PASSWORD_TEXT = 'Password';
    const {withStoreComponent} = withStore(<UserAuthentication />);
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);
    expect(screen.getByTestId(EMAIL_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(PASSWORD_TEST_ID)).toBeInTheDocument();
    expect(screen.getByText(PASSWORD_TEXT)).toBeInTheDocument();
    expect(screen.getByText(EMAIL_TEXT)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render correctly when user enter login and password', async () => {
    const EMAIL_TEST_ID = 'emailElement';
    const PASSWORD_TEST_ID = 'passwordElement';
    const EXPECTED_EMAIL_VALUE = 'dc@dc.dc';
    const EXPECTED_PASSWORD_VALUE = 'q1';
    const {withStoreComponent} = withStore(<UserAuthentication />);
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);
    await userEvent.type(
      screen.getByTestId(EMAIL_TEST_ID),
      EXPECTED_EMAIL_VALUE,
    );
    await userEvent.type(
      screen.getByTestId(PASSWORD_TEST_ID),
      EXPECTED_PASSWORD_VALUE,
    );
    expect(screen.getByDisplayValue(EXPECTED_EMAIL_VALUE)).toBeInTheDocument();
    expect(screen.getByDisplayValue(EXPECTED_PASSWORD_VALUE)).toBeInTheDocument();

  });
});
