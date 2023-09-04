import {render, screen} from '@testing-library/react';
import NotFoundPage from './not-found-page';
import { withHistory } from '../../utils/mock-component';

describe('Component: Not Found Page',() => {
  it('should render correctly', () => {
    const EXPECTED_HEADER_TEXT = '404.Страница которую вы запрашиваете не найдена.';
    const EXPECTED_LINK_TEXT = 'Вернуться на главную страницу';
    const preparedComponent = withHistory(NotFoundPage());

    render(preparedComponent);

    expect(screen.getByText(EXPECTED_HEADER_TEXT)).toBeInTheDocument();
    expect(screen.getByText(EXPECTED_LINK_TEXT)).toBeInTheDocument();
  });
});
