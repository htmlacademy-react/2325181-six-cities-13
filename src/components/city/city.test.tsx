import {render, screen} from '@testing-library/react';
import City from './city';
import { withHistory, withStore } from '../../utils/mock-component';

describe('Component: City',() => {
  it('should render correctly', () => {
    const LOCATIONS_TEST_ID = 'locations-container';
    const {withStoreComponent} = withStore(<City />);
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);
    expect(screen.getByTestId(LOCATIONS_TEST_ID)).toBeInTheDocument();
  });
});
