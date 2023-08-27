import { createSlice } from '@reduxjs/toolkit';
import { OfferType, OffersType, RequestStatusType} from '../../types/types';
import { NameSpace, RequestStatus } from '../../const';
import { addBookmarkAction, loadFavoritesAction, logoutUserAction } from '../api-actions';

export type FavoritesStateType = {
  favorites: OffersType;
  favoritesLoadingStatus: RequestStatusType;
  hasFavoritesError: boolean;
}

const favoritesState: FavoritesStateType = {
  favorites: [],
  favoritesLoadingStatus: RequestStatus.Idle,
  hasFavoritesError: false
};

export const favorites = createSlice({
  name: NameSpace.Favorites,
  initialState: favoritesState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadFavoritesAction.pending, (state) => {
        state.favoritesLoadingStatus = RequestStatus.Pending;
      })
      .addCase(loadFavoritesAction.fulfilled, (state, action) => {
        state.favoritesLoadingStatus = RequestStatus.Fulfilled;
        state.favorites = action.payload as OffersType;
      })
      .addCase(loadFavoritesAction.rejected, (state) => {
        state.favoritesLoadingStatus = RequestStatus.Rejected;
        state.hasFavoritesError = true;
      })
      .addCase(logoutUserAction.fulfilled, (state) =>{
        state.favorites = [];
      })
      .addCase(addBookmarkAction.fulfilled, (state, action) => {
        const favoriteOffer = action.payload as OfferType;
        if (favoriteOffer.isFavorite) {
          state.favorites.push(action.payload as OfferType);
        } else {
          state.favorites = state.favorites.filter((offer) => offer.id !== favoriteOffer.id);
        }
      });
  }
});

