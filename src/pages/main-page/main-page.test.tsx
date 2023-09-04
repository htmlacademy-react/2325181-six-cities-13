import {render, screen} from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import MainPage from './main-page';
import { makeFakeStore } from '../../utils/mocks';
import { RequestStatus } from '../../const';

describe('Component: Main Page', () => {
  it('should render correct', () => {
    const MAIN_PAGE_TEST_ID = 'main-page-element';
    const mockStore = makeFakeStore();
    mockStore.offers.offersLoadingStatus = RequestStatus.Fulfilled;
    mockStore.offers.hasDataError = false;
    const { withStoreComponent } = withStore(<MainPage />, mockStore);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByTestId(MAIN_PAGE_TEST_ID)).toBeInTheDocument();
  });
});
