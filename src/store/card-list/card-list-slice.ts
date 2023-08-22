import { ActiveSortOrderType, LocationType } from '../../types/types';
import { Locations, NameSpace, SortOrders } from '../../const';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type CardListStateType = {
  location: LocationType;
  activeSortOrder: ActiveSortOrderType;
}

export const cardListState: CardListStateType = {
  location: Locations.Paris,
  activeSortOrder: SortOrders.Popular.order,
};

export const cardlist = createSlice({
  name: NameSpace.CardList,
  initialState: cardListState,
  reducers: {
    updateLocation: (state, action: PayloadAction<LocationType>) => {
      state.location = action.payload;
    },
    updateSortOrder: (state, action: PayloadAction<ActiveSortOrderType>) => {
      state.activeSortOrder = action.payload;
    }
  },
});

export const {updateLocation, updateSortOrder} = cardlist.actions;
