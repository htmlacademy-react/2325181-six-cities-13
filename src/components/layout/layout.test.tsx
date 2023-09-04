import {render, screen} from '@testing-library/react';
import Layout from './layout';
import { withHistory, withStore } from '../../utils/mock-component';

describe('Component: Layout',() => {
  it('should render correctly', () => {
    const LAYOUT_TEST_ID = 'layout-container';
    const {withStoreComponent} = withStore(<Layout />);
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);
    expect(screen.getByTestId(LAYOUT_TEST_ID)).toBeInTheDocument();
  });
});
