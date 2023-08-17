import { NameSpace } from '../../const';
import { State } from '../../types/types';

export const selectFavorites = (state: Pick<State, typeof NameSpace.Favorites>) => state[NameSpace.Favorites].favorites;

export const selectFavortiesStatus = (state: Pick<State, typeof NameSpace.Favorites>) => state[NameSpace.Favorites].favoritesLoadingStatus;

export const selectFavoritesErrorStatus = (state: Pick<State, typeof NameSpace.Favorites>) => state[NameSpace.Favorites].hasFavoritesError;
