import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { OffersType } from '../../types/types';
import { loadOffersAction } from '../api-actions';

export type OffersStateType = {
  offers: OffersType;
  isDataLoading: boolean;
  hasDataError: boolean;
}

const offersState: OffersStateType = {
  offers: [],
  isDataLoading: false,
  hasDataError: false
};

export const offers = createSlice({
  name: NameSpace.Offers,
  initialState: offersState,
  reducers: {
    loadOffers: (state, action: PayloadAction<OffersType>) => {
      state.offers = action.payload;
    },
    setDataLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isDataLoading = action.payload;
    }

  },
  extraReducers(builder) {
    builder
      .addCase(loadOffersAction.pending, (state) => {
        state.isDataLoading = true;
        state.hasDataError = false;
      })
      .addCase(loadOffersAction.fulfilled, (state, action) => {
        state.isDataLoading = false;
        state.offers = action.payload;
      })
      .addCase(loadOffersAction.rejected, (state) => {
        state.isDataLoading = false;
        state.hasDataError = true;
      });
  }

});

export const {loadOffers, setDataLoadingStatus} = offers.actions;
