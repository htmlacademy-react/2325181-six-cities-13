import { OfferDetailsStateType, loadOfferDetails, offerDetails, setOfferId } from './offer-details-slice';
import { RequestStatus } from '../../const';
import { makeFakeFavoritesOffers } from '../../utils/mocks';
import { addBookmarkAction, loadOfferDetailsAction } from '../api-actions';
import { getFavoriteStatusCode } from '../../helper';

describe('Offer Details Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState: OfferDetailsStateType = {
      offerId: '',
      offerDetails: null,
      offerLoadingStatus: RequestStatus.Idle,
      hasOfferDetailsError: false
    };
    const result = offerDetails.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState: OfferDetailsStateType = {
      offerId: '',
      offerDetails: null,
      offerLoadingStatus: RequestStatus.Idle,
      hasOfferDetailsError: false
    };
    const result = offerDetails.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set offer id with "setOfferId" action', () => {
    const initialState: OfferDetailsStateType = {
      offerId: '',
      offerDetails: null,
      offerLoadingStatus: RequestStatus.Idle,
      hasOfferDetailsError: false
    };
    const mockOfferId = 'mockOfferId';
    const expectedState: OfferDetailsStateType = {
      offerId: mockOfferId,
      offerDetails: null,
      offerLoadingStatus: RequestStatus.Idle,
      hasOfferDetailsError: false
    };

    const result = offerDetails.reducer(initialState, setOfferId(mockOfferId));
    expect(result).toEqual(expectedState);
  });

  it('should load offer details with "loadOfferDetails" action', () => {
    const initialState: OfferDetailsStateType = {
      offerId: '',
      offerDetails: null,
      offerLoadingStatus: RequestStatus.Idle,
      hasOfferDetailsError: false
    };
    const mockOffer = makeFakeFavoritesOffers()[0];
    const expectedState: OfferDetailsStateType = {
      offerId: '',
      offerDetails: mockOffer,
      offerLoadingStatus: RequestStatus.Idle,
      hasOfferDetailsError: false
    };
    const result = offerDetails.reducer(initialState, loadOfferDetails(mockOffer));
    expect(result).toEqual(expectedState);
  });

  it('should set "offerLoadingStatus" to "RequestStatus.Pending", "hasOfferDetailsError" to "false" with "loadOfferDetailsAction.pending"', () => {
    const initialState: OfferDetailsStateType = {
      offerId: '',
      offerDetails: null,
      offerLoadingStatus: RequestStatus.Idle,
      hasOfferDetailsError: true
    };
    const expectedState: OfferDetailsStateType = {
      offerId: '',
      offerDetails: null,
      offerLoadingStatus: RequestStatus.Pending,
      hasOfferDetailsError: false
    };
    const result = offerDetails.reducer(initialState, loadOfferDetailsAction.pending);
    expect(result).toEqual(expectedState);
  });

  it('should set "offerLoadingStatus" to "RequestStatus.Fulfilled" with "loadOfferDetailsAction.fulfilled"', () => {
    const initialState: OfferDetailsStateType = {
      offerId: '',
      offerDetails: null,
      offerLoadingStatus: RequestStatus.Pending,
      hasOfferDetailsError: false
    };
    const expectedState: OfferDetailsStateType = {
      offerId: '',
      offerDetails: null,
      offerLoadingStatus: RequestStatus.Fulfilled,
      hasOfferDetailsError: false
    };
    const result = offerDetails.reducer(initialState, loadOfferDetailsAction.fulfilled);
    expect(result).toEqual(expectedState);
  });

  it('should set "offerLoadingStatus" to "RequestStatus.Rejected", "hasOfferDetailsError" to "true" with "loadOfferDetailsAction.rejected"', () => {
    const initialState: OfferDetailsStateType = {
      offerId: '',
      offerDetails: null,
      offerLoadingStatus: RequestStatus.Pending,
      hasOfferDetailsError: false
    };
    const expectedState: OfferDetailsStateType = {
      offerId: '',
      offerDetails: null,
      offerLoadingStatus: RequestStatus.Rejected,
      hasOfferDetailsError: true
    };
    const result = offerDetails.reducer(initialState, loadOfferDetailsAction.rejected);
    expect(result).toEqual(expectedState);
  });
  it('should set "offerDetails.isFavorite" to the value of "favoriteOffer.isFavorite" if "offerDetails" is not null and if "offerDetails.id" equals to "favoriteOffer.id" with "addBookmarkAction.fulfilled"', () => {
    const mockOffer = structuredClone(makeFakeFavoritesOffers()[0]);
    const mockFavoriteOffer = structuredClone(mockOffer);
    mockFavoriteOffer.isFavorite = !mockFavoriteOffer.isFavorite;

    const initialState: OfferDetailsStateType = {
      offerId: '',
      offerDetails: mockOffer,
      offerLoadingStatus: RequestStatus.Idle,
      hasOfferDetailsError: false
    };
    const expectedState: OfferDetailsStateType = {
      offerId: '',
      offerDetails: mockFavoriteOffer,
      offerLoadingStatus: RequestStatus.Idle,
      hasOfferDetailsError: false
    };
    const result = offerDetails.reducer(initialState, addBookmarkAction.fulfilled(mockFavoriteOffer, '', {id: mockFavoriteOffer.id, status: getFavoriteStatusCode(mockFavoriteOffer.isFavorite)}));
    expect(result).toEqual(expectedState);
  });
});
