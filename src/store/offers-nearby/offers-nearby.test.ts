import { OffersNearbyStateType, offersNearby, loadOffersNearby } from './offers-nearby-slice';
import { makeFakeFavoritesOffers } from '../../utils/mocks';
import { RequestStatus } from '../../const';
import { loadOffersNearbyAction, addBookmarkAction } from '../api-actions';
import { getFavoriteStatusCode } from '../../helper';

describe('Offer Details Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState: OffersNearbyStateType = {
      offersNearby: [],
      nearbyLoadingStatus: RequestStatus.Idle,
      hasNearbyError: false
    };
    const result = offersNearby.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState: OffersNearbyStateType = {
      offersNearby: [],
      nearbyLoadingStatus: RequestStatus.Idle,
      hasNearbyError: false
    };
    const result = offersNearby.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "offersNearby" to offers array  with "loadOffersNearby" action', () => {
    const initialState: OffersNearbyStateType = {
      offersNearby: [],
      nearbyLoadingStatus: RequestStatus.Idle,
      hasNearbyError: false
    };
    const mockOffersNearby = makeFakeFavoritesOffers();
    const expectedState: OffersNearbyStateType = {
      offersNearby: mockOffersNearby,
      nearbyLoadingStatus: RequestStatus.Idle,
      hasNearbyError: false
    };
    const result = offersNearby.reducer(initialState, loadOffersNearby(mockOffersNearby));
    expect(result).toEqual(expectedState);
  });

  it('should set "nearbyLoadingStatus" to "RequestStatus.Pending", "hasNearbyError" to "false" when "loadOffersNearbyAction.pending"', () => {
    const initialState: OffersNearbyStateType = {
      offersNearby: [],
      nearbyLoadingStatus: RequestStatus.Idle,
      hasNearbyError: true
    };
    const expectedState: OffersNearbyStateType = {
      offersNearby: [],
      nearbyLoadingStatus: RequestStatus.Pending,
      hasNearbyError: false
    };
    const result = offersNearby.reducer(initialState, loadOffersNearbyAction.pending);
    expect(result).toEqual(expectedState);
  });

  it('it should set "nearbyLoadingStatus" to "RequestStatus.Fulfilled" with "loadOffersNearbyAction.fulfilled" action', () => {
    const initialState: OffersNearbyStateType = {
      offersNearby: [],
      nearbyLoadingStatus: RequestStatus.Pending,
      hasNearbyError: false
    };
    const expectedState: OffersNearbyStateType = {
      offersNearby: [],
      nearbyLoadingStatus: RequestStatus.Fulfilled,
      hasNearbyError: false
    };
    const result = offersNearby.reducer(initialState, loadOffersNearbyAction.fulfilled);
    expect(result).toEqual(expectedState);
  });

  it('it should set "nearbyLoadingStatus" to "RequestStatus.Rejected", "hasNearbyError" to "true" with "loadOffersNearbyAction.rejected" action', () => {
    const initialState: OffersNearbyStateType = {
      offersNearby: [],
      nearbyLoadingStatus: RequestStatus.Pending,
      hasNearbyError: false
    };
    const expectedState: OffersNearbyStateType = {
      offersNearby: [],
      nearbyLoadingStatus: RequestStatus.Rejected,
      hasNearbyError: true
    };
    const result = offersNearby.reducer(initialState, loadOffersNearbyAction.rejected);
    expect(result).toEqual(expectedState);
  });

  it('should  set offer from "offersNearby" if its id equals to favorite offer id to opposite is favorite status with "addBookmarkAction.fulfilled" action', () => {
    const initialMockOffers = makeFakeFavoritesOffers();
    const initialState: OffersNearbyStateType = {
      offersNearby: initialMockOffers,
      nearbyLoadingStatus: RequestStatus.Idle,
      hasNearbyError: false
    };
    const fakeFavoriteOffer = initialMockOffers[1];
    const expectedMockOffers = initialMockOffers.map((offer) => {
      if (offer.id === fakeFavoriteOffer.id) {
        offer.isFavorite = fakeFavoriteOffer.isFavorite;
      }
      return offer;
    });
    const expectedState: OffersNearbyStateType = {
      offersNearby: expectedMockOffers,
      nearbyLoadingStatus: RequestStatus.Idle,
      hasNearbyError: false
    };
    const result = offersNearby.reducer(initialState, addBookmarkAction.fulfilled(fakeFavoriteOffer, '', {id: fakeFavoriteOffer.id, status: getFavoriteStatusCode(fakeFavoriteOffer.isFavorite)}));
    expect(result).toEqual(expectedState);
  });
});
