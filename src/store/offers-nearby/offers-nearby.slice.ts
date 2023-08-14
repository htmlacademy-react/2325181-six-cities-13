import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { OffersType, RequestStatusType} from '../../types/types';
import { NameSpace, RequestStatus } from '../../const';
import { loadOffersNearbyAction } from '../api-actions';

export type OffersNearbyStateType = {
  offersNearby: OffersType;
  nearbyLoadingStatus: RequestStatusType;
}

const offersNearbyState: OffersNearbyStateType = {
  offersNearby: [],
  nearbyLoadingStatus: RequestStatus.Idle,
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
      })
      .addCase(loadOffersNearbyAction.fulfilled, (state) => {
        state.nearbyLoadingStatus = RequestStatus.Fulfilled;
      })
      .addCase(loadOffersNearbyAction.rejected, (state) => {
        state.nearbyLoadingStatus = RequestStatus.Rejected;
      });
  }
});

export const {loadOffersNearby} = offersNearby.actions;

