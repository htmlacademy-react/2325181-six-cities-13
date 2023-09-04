import { OffersStateType, offers } from './offers-slice';
import { addBookmarkAction, loadOffersAction, logoutUserAction } from '../api-actions';
import { makeFakeOffersList } from '../../utils/mocks';
import { RequestStatus } from '../../const';
import { getFavoriteStatusCode, getRandomArrayElement } from '../../helper';

describe('Offers Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState: OffersStateType = {
      offers: [],
      offersLoadingStatus: RequestStatus.Idle,
      hasDataError: false
    };
    const result = offers.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState: OffersStateType = {
      offers: [],
      offersLoadingStatus: RequestStatus.Idle,
      hasDataError: false
    };
    const result = offers.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "offersLoadingStatus" to "RequestStatus.Pending", "hasDataError" to "false" with "loadOffersAction.pending"', () => {
    const initialState: OffersStateType = {
      offers: [],
      offersLoadingStatus: RequestStatus.Idle,
      hasDataError: true
    };
    const expectedState: OffersStateType = {
      offers: [],
      offersLoadingStatus: RequestStatus.Pending,
      hasDataError: false
    };
    const result = offers.reducer(initialState, loadOffersAction.pending);
    expect(result).toEqual(expectedState);
  });

  it('should set "offersLoadingStatus" to "RequestStatus.Fulfilled", "offers" to offers array with "loadOffersAction.fulfilled"', () => {
    const initialState: OffersStateType = {
      offers: [],
      offersLoadingStatus: RequestStatus.Pending,
      hasDataError: false
    };
    const mockOffers = makeFakeOffersList();
    const expectedState: OffersStateType = {
      offers: mockOffers,
      offersLoadingStatus: RequestStatus.Fulfilled,
      hasDataError: false
    };
    const result = offers.reducer(initialState, loadOffersAction.fulfilled(mockOffers, '', undefined));
    expect(result).toEqual(expectedState);
  });

  it('should set "offersLoadingStatus" to "RequestStatus.Rejected", "hasDataError" to "true" with "loadOffersAction.rejected" action', () => {
    const initialState: OffersStateType = {
      offers: [],
      offersLoadingStatus: RequestStatus.Pending,
      hasDataError: false
    };
    const expectedState: OffersStateType = {
      offers: [],
      offersLoadingStatus: RequestStatus.Rejected,
      hasDataError: true
    };
    const result = offers.reducer(initialState, loadOffersAction.rejected);
    expect(result).toEqual(expectedState);
  });

  it('should set each of "offers" if offer is favorite to offer not favorite with "logoutUserAction.fulfilled" action', () => {
    const initialMockOffers = makeFakeOffersList();
    const initialState: OffersStateType = {
      offers: initialMockOffers,
      offersLoadingStatus: RequestStatus.Idle,
      hasDataError: false
    };
    const expectedMockOffers = initialMockOffers.map((offer) => {
      if (offer.isFavorite) {
        offer.isFavorite = false;
      }
      return offer;
    });
    const expectedState: OffersStateType = {
      offers: expectedMockOffers,
      offersLoadingStatus: RequestStatus.Idle,
      hasDataError: false
    };
    const result = offers.reducer(initialState, logoutUserAction.fulfilled);
    expect(result).toEqual(expectedState);
  });

  it('should  set offer from "offers" if its id equals to favorite offer id to opposite is favorite status with "addBookmarkAction.fulfilled" action', () => {
    const initialMockOffers = makeFakeOffersList();
    const initialState: OffersStateType = {
      offers: initialMockOffers,
      offersLoadingStatus: RequestStatus.Idle,
      hasDataError: false
    };
    const fakeFavoriteOffer = getRandomArrayElement(initialMockOffers);
    const expectedMockOffers = initialMockOffers.map((offer) => {
      if (offer.id === fakeFavoriteOffer.id) {
        offer.isFavorite = fakeFavoriteOffer.isFavorite;
      }
      return offer;
    });
    const expectedState: OffersStateType = {
      offers: expectedMockOffers,
      offersLoadingStatus: RequestStatus.Idle,
      hasDataError: false
    };
    const result = offers.reducer(initialState, addBookmarkAction.fulfilled(fakeFavoriteOffer, '', {id: fakeFavoriteOffer.id, status: getFavoriteStatusCode(fakeFavoriteOffer.isFavorite)}));
    expect(result).toEqual(expectedState);
  });
});
