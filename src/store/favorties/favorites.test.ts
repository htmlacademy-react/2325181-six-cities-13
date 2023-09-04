import { FavoritesStateType, favorites } from './favorites-slice';
import { RequestStatus } from '../../const';
import { addBookmarkAction, loadFavoritesAction, logoutUserAction } from '../api-actions';
import { makeFakeOffersList } from '../../utils/mocks';
import { getFavoriteStatusCode } from '../../helper';

describe('Favorites Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState: FavoritesStateType = {
      favorites: [],
      favoritesLoadingStatus: RequestStatus.Idle,
      hasFavoritesError: false
    };
    const result = favorites.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState: FavoritesStateType = {
      favorites: [],
      favoritesLoadingStatus: RequestStatus.Idle,
      hasFavoritesError: false
    };
    const result = favorites.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "favoritesLoadingStatus" to "RequestStatus.Pending" with "loadFavoritesAction.pending"', () => {
    const expectedState: FavoritesStateType = {
      favorites: [],
      favoritesLoadingStatus: RequestStatus.Pending,
      hasFavoritesError: false
    };
    const result = favorites.reducer(undefined, loadFavoritesAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "favoritesLoadingStatus" to "RequestStatus.Fulfilled", set "favorites" to array with favorite offers with "loadFavoritesAction.fulfilled"', () => {
    const mockFavoritesOffers = makeFakeOffersList();
    const expectedState: FavoritesStateType = {
      favorites: mockFavoritesOffers,
      favoritesLoadingStatus: RequestStatus.Fulfilled,
      hasFavoritesError: false
    };
    const result = favorites.reducer(undefined, loadFavoritesAction.fulfilled(mockFavoritesOffers, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "favoritesLoadingStatus" to "RequestStatus.Rejected, "hasFavoritesError" to "true" with "loadFavoritesAction.rejected"', () => {
    const expectedState: FavoritesStateType = {
      favorites: [],
      favoritesLoadingStatus: RequestStatus.Rejected,
      hasFavoritesError: true
    };

    const result = favorites.reducer(undefined, loadFavoritesAction.rejected);
    expect(result).toEqual(expectedState);
  });

  it('should set "favorites" to empty array with "logoutUserAction.fulfilled"', () => {
    const mockFavoritesOffers = makeFakeOffersList();
    const initialState: FavoritesStateType = {
      favorites: mockFavoritesOffers,
      favoritesLoadingStatus: RequestStatus.Idle,
      hasFavoritesError: false
    };
    const expectedState: FavoritesStateType = {
      favorites: [],
      favoritesLoadingStatus: RequestStatus.Idle,
      hasFavoritesError: false
    };
    const result = favorites.reducer(initialState, logoutUserAction.fulfilled);
    expect(result).toEqual(expectedState);
  });

  it('should add favorite offer to "favorites" if favorite offer is favorite with "addBookmarkAction.fulfilled"', () => {
    const initialFavorites = makeFakeOffersList();
    const favoriteOffer = structuredClone(initialFavorites[0]);
    const expectedFavorites = [...initialFavorites, favoriteOffer];
    const initialState: FavoritesStateType = {
      favorites: initialFavorites,
      favoritesLoadingStatus: RequestStatus.Idle,
      hasFavoritesError: false
    };
    const expectedState: FavoritesStateType = {
      favorites: expectedFavorites,
      favoritesLoadingStatus: RequestStatus.Idle,
      hasFavoritesError: false
    };
    const result = favorites.reducer(initialState, addBookmarkAction.fulfilled(favoriteOffer, '', {id: favoriteOffer.id, status: getFavoriteStatusCode(favoriteOffer.isFavorite)}));
    expect(result).toEqual(expectedState);
  });

  it('should remove favorite offer from "favorites" if favorite offer is not favorite with "addBookmarkAction.fulfilled"', () => {
    const initialFavorites = makeFakeOffersList();
    const initialState: FavoritesStateType = {
      favorites: initialFavorites,
      favoritesLoadingStatus: RequestStatus.Idle,
      hasFavoritesError: false
    };
    const notFavoriteOffer = structuredClone(initialFavorites[0]);
    notFavoriteOffer.isFavorite = false;
    const expectedFavorites = initialFavorites.filter((offer) => offer.id !== notFavoriteOffer.id);
    const expectedState: FavoritesStateType = {
      favorites: expectedFavorites,
      favoritesLoadingStatus: RequestStatus.Idle,
      hasFavoritesError: false
    };
    const result = favorites.reducer(initialState, addBookmarkAction.fulfilled(notFavoriteOffer, '', {id: notFavoriteOffer.id, status: getFavoriteStatusCode(notFavoriteOffer.isFavorite)}));
    expect(result).toEqual(expectedState);
  });
});
