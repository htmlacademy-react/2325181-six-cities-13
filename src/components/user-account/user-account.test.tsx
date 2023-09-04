import {render, screen} from '@testing-library/react';
import UserAccount from './user-account';
import { withHistory, withStore } from '../../utils/mock-component';

describe('Component: User Account',() => {
  it('should render correctly', () => {
    const EXPECTED_TEXT = 'Sign out';
    const {withStoreComponent} = withStore(<UserAccount />);
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);
    expect(screen.getByText(EXPECTED_TEXT)).toBeInTheDocument();
  });
});

