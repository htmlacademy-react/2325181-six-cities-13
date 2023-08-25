import {render, screen} from '@testing-library/react';
import UserAccount from './user-account';
import { withHistory } from '../../utils/mock-component';

describe('Component: User Account',() => {
  it('should render correctly', () => {
    const expectedText = 'Sign out';
    const preparedComponent = withHistory(UserAccount());
    render(preparedComponent);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
