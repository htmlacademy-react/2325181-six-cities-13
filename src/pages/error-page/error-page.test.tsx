import {render, screen} from '@testing-library/react';
import ErrorPage from './error-page';
import {withStore } from '../../utils/mock-component';

describe('Component: Error Page',() => {
  it('should render correctly', () => {
    const ERROR_PAGE_TEST_ID = 'Error Page Element';
    const EXPECTED_TEXT = 'Не удалось загрузить предложения. Попробуйте еще раз.';
    const {withStoreComponent} = withStore(<ErrorPage />);
    render(withStoreComponent);
    expect(screen.getByTestId(ERROR_PAGE_TEST_ID)).toBeInTheDocument();
    expect(screen.getByText(EXPECTED_TEXT)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
