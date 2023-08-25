import {render, screen} from '@testing-library/react';
import Logo from './logo';
import { withHistory } from '../../utils/mock-component';

describe('Component: Logo',() => {
  it('should render correctly', () => {
    const MOCK_IS_FOOTER_LOGO = false;
    const expectedAltText = '6 cities logo';
    const expectedClassname = 'header__logo-link';
    const expectedElementCount = 1;

    const preparedComponent = withHistory(<Logo isFooterLogo={MOCK_IS_FOOTER_LOGO} />);
    const {container} = render(preparedComponent);
    expect(screen.getByAltText(expectedAltText)).toBeInTheDocument();
    expect(container.getElementsByClassName(expectedClassname).length).toBe(expectedElementCount);

  });
});
