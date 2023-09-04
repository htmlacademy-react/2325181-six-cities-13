import {render, screen} from '@testing-library/react';
import PremiumTag from './premium-tag';

describe('Component: Premium Tag', () => {
  it('should render correctly', () => {
    const MOCK_PREFIX = 'offer';
    const EXPECTED_TEXT = 'Premium';
    const expectClassname = `${MOCK_PREFIX}__mark`;
    const EXPECTED_TAG_COUNT = 1;

    const {container} = render(<PremiumTag prefix={MOCK_PREFIX}/>);

    expect(screen.getByText(EXPECTED_TEXT)).toBeInTheDocument();
    expect(container.getElementsByClassName(expectClassname).length).toBe(EXPECTED_TAG_COUNT);

  });
});
