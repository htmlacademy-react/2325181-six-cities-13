import { NameSpace } from '../../const';
import { StateType } from '../../types/types';

export const selectFavorites = (state: Pick<StateType, typeof NameSpace.Favorites>) => state[NameSpace.Favorites].favorites;

export const selectFavoritesLoadingStatus = (state: Pick<StateType, typeof NameSpace.Favorites>) => state[NameSpace.Favorites].favoritesLoadingStatus;

