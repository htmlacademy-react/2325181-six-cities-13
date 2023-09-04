import {render, screen} from '@testing-library/react';
import UserLogin from './user-login';
import { withHistory } from '../../utils/mock-component';

describe('Component: User Login',() => {
  it('should render correctly', () => {
    const EXPECTED_TEXT = 'Sign in';
    const preparedComponent = withHistory(<UserLogin />);
    render(preparedComponent);
    expect(screen.getByText(EXPECTED_TEXT)).toBeInTheDocument();
  });
});

