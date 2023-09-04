import { render, screen } from '@testing-library/react';
import { withHistory,withStore } from '../../utils/mock-component';
import OfferPage from './offer-page';
import { makeFakeStore } from '../../utils/mocks';
import { RequestStatus } from '../../const';

describe('Component: Offer', () => {
  it('should render correct', () => {
    const offerPageTestId = 'offer page element';
    const offerPageMockStore = makeFakeStore();
    offerPageMockStore.offerDetails.offerLoadingStatus = RequestStatus.Fulfilled;
    const { withStoreComponent } = withStore(<OfferPage />, offerPageMockStore);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByTestId(offerPageTestId)).toBeInTheDocument();
  });
});
