import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {OfferType, RequestStatusType } from '../../types/types';
import { NameSpace, RequestStatus } from '../../const';
import { loadOfferDetailsAction, addBookmarkAction} from '../api-actions';

export type OfferDetailsStateType = {
  offerId: string;
  offerDetails: OfferType | null;
  offerLoadingStatus: RequestStatusType;
  hasOfferDetailsError: boolean;
}

const offerDetailsState: OfferDetailsStateType = {
  offerId: '',
  offerDetails: null,
  offerLoadingStatus: RequestStatus.Idle,
  hasOfferDetailsError: false
};

export const offerDetails = createSlice({
  name: NameSpace.OfferDetails,
  initialState: offerDetailsState,
  reducers: {
    setOfferId: (state, action: PayloadAction<string>) => {
      state.offerId = action.payload;
    },
    loadOfferDetails: (state, action: PayloadAction<OfferType>) => {
      state.offerDetails = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(loadOfferDetailsAction.pending, (state) => {
        state.offerLoadingStatus = RequestStatus.Pending;
        state.hasOfferDetailsError = false;
      })
      .addCase(loadOfferDetailsAction.fulfilled, (state) => {
        state.offerLoadingStatus = RequestStatus.Fulfilled;
      })
      .addCase(loadOfferDetailsAction.rejected, (state) => {
        state.offerLoadingStatus = RequestStatus.Rejected;
        state.hasOfferDetailsError = true;
      })
      .addCase(addBookmarkAction.fulfilled, (state, action) => {
        const favoriteOffer = action.payload;
        if (state.offerDetails) {
          state.offerDetails.isFavorite = favoriteOffer.isFavorite;
        }
      });
  }
});

export const {setOfferId, loadOfferDetails} = offerDetails.actions;

