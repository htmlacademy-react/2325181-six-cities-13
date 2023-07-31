import { createReducer } from '@reduxjs/toolkit';
import { changeLocation, renderFilteredOffers } from './action';
import { Locations } from '../const';
import { InitialStateType } from '../types/types';
import { Offers } from '../mocks/offers';


const initialState: InitialStateType = {
  location: Locations.Paris,
  offers: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeLocation, (state, action) => {
      state.location = action.payload;
    })
    .addCase(renderFilteredOffers, (state) => {
      state.offers.push(...Offers);
    });
});
