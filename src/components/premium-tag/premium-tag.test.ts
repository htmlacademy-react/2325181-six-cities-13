import {render, screen} from '@testing-library/react';
import PremiumTag from './premium-tag';

describe('Component: Premium Tag', () => {
  it('should render correctly', () => {
    const MOCK_PREFIX = 'offer';
    const expectedText = 'Premium';
    const expectClassname = `${MOCK_PREFIX}__mark`;
    const expectedTagCount = 1;

    const {container} = render(PremiumTag({prefix: MOCK_PREFIX}));

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(container.getElementsByClassName(expectClassname).length).toBe(expectedTagCount);

  });
});
