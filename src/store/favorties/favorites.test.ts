import { FavoritesStateType, favorites } from './favorites-slice';
import { RequestStatus } from '../../const';
import { loadFavoritesAction } from '../api-actions';

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
    
    const expectedState: FavoritesStateType = {
      favorites: [],
      favoritesLoadingStatus: RequestStatus.Pending,
      hasFavoritesError: false
    };
    const result = favorites.reducer(undefined, loadFavoritesAction.fulfilled);

    expect(result).toEqual(expectedState);
  });


});
