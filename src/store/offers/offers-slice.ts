import {createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { OfferType, OffersType, RequestStatusType } from '../../types/types';
import { loadOffersAction, addBookmarkAction, logoutUserAction } from '../api-actions';

export type OffersStateType = {
  offers: OffersType;
  offersLoadingStatus: RequestStatusType;
  hasDataError: boolean;
}

const offersState: OffersStateType = {
  offers: [],
  offersLoadingStatus: RequestStatus.Idle,
  hasDataError: false
};

export const offers = createSlice({
  name: NameSpace.Offers,
  initialState: offersState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadOffersAction.pending, (state) => {
        state.offersLoadingStatus = RequestStatus.Pending;
        state.hasDataError = false;
      })
      .addCase(loadOffersAction.fulfilled, (state, action) => {
        state.offersLoadingStatus = RequestStatus.Fulfilled;
        state.offers = action.payload as OffersType;
      })
      .addCase(loadOffersAction.rejected, (state) => {
        state.offersLoadingStatus = RequestStatus.Rejected;
        state.hasDataError = true;
      })
      .addCase(logoutUserAction.fulfilled, (state) => {
        state.offers.forEach((offer) => {
          if (offer.isFavorite) {
            offer.isFavorite = false;
          }
        });
      })
      .addCase(addBookmarkAction.fulfilled, (state, action) => {
        const favoriteOffer = action.payload as OfferType;
        state.offers.forEach((offer) => {
          if (offer.id === favoriteOffer.id) {
            offer.isFavorite = favoriteOffer.isFavorite;
          }
        });
      });
  }

});

