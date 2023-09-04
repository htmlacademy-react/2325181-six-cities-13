import {render, screen} from '@testing-library/react';
import Logo from './logo';
import { withHistory } from '../../utils/mock-component';

describe('Component: Logo',() => {
  it('should render correctly', () => {
    const mockIsFooterLogo = false;
    const EXPECTED_ALT_TEXT = '6 cities logo';
    const EXPECTED_CLASSNAME = 'header__logo-link';
    const EXPECTED_ELEMENT_COUNT = 1;

    const preparedComponent = withHistory(<Logo isFooterLogo={mockIsFooterLogo} />);
    const {container} = render(preparedComponent);
    expect(screen.getByAltText(EXPECTED_ALT_TEXT)).toBeInTheDocument();
    expect(container.getElementsByClassName(EXPECTED_CLASSNAME).length).toBe(EXPECTED_ELEMENT_COUNT);

  });
});
