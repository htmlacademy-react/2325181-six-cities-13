import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { OffersType, OfferType, RequestStatusType} from '../../types/types';
import { NameSpace, RequestStatus } from '../../const';
import { loadOffersNearbyAction, addBookmarkAction } from '../api-actions';

export type OffersNearbyStateType = {
  offersNearby: OffersType;
  nearbyLoadingStatus: RequestStatusType;
  hasNearbyError: boolean;
}

const offersNearbyState: OffersNearbyStateType = {
  offersNearby: [],
  nearbyLoadingStatus: RequestStatus.Idle,
  hasNearbyError: false
};

export const offersNearby = createSlice({
  name: NameSpace.OffersNearby,
  initialState: offersNearbyState,
  reducers: {
    loadOffersNearby: (state, action: PayloadAction<OffersType>) => {
      state.offersNearby = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loadOffersNearbyAction.pending, (state) => {
        state.nearbyLoadingStatus = RequestStatus.Pending;
        state.hasNearbyError = false;
      })
      .addCase(loadOffersNearbyAction.fulfilled, (state) => {
        state.nearbyLoadingStatus = RequestStatus.Fulfilled;
      })
      .addCase(loadOffersNearbyAction.rejected, (state) => {
        state.nearbyLoadingStatus = RequestStatus.Rejected;
        state.hasNearbyError = true;
      })
      .addCase(addBookmarkAction.fulfilled, (state, action) => {
        const favoriteOffer = action.payload as OfferType;
        state.offersNearby.forEach((offer) => {
          if (offer.id === favoriteOffer.id) {
            offer.isFavorite = favoriteOffer.isFavorite;
          }
        });
      });
  }
});

export const {loadOffersNearby} = offersNearby.actions;

