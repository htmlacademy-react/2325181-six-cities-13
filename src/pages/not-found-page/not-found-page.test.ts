import {render, screen} from '@testing-library/react';
import NotFoundPage from './not-found-page';
import { withHistory } from '../../utils/mock-component';

describe('Component: Not Found Page',() => {
  it('should render correctly', () => {
    const expectedHeaderText = '404.Страница которую вы запрашиваете не найдена.';
    const expectedLinkText = 'Вернуться на главную страницу';
    const preparedComponent = withHistory(NotFoundPage());

    render(preparedComponent);

    expect(screen.getByText(expectedHeaderText)).toBeInTheDocument();
    expect(screen.getByText(expectedLinkText)).toBeInTheDocument();
  });
});
