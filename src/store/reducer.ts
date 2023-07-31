import { createReducer } from '@reduxjs/toolkit';
import { changeLocation, renderFilteredOffers } from './action';
import { Locations } from '../const';
import { LocationType, OffersType } from '../types/types';
import { Offers } from '../mocks/offers';


type InitialStateType = {
  location: LocationType;
  offers: OffersType;
}

const initialState: InitialStateType = {
  location: Locations.Paris,
  offers: []
};

export const locationReducer = createReducer(initialState, (builer) => {
  builer
    .addCase(changeLocation, (state, action) => {
      state.location = action.payload;
    })
    .addCase(renderFilteredOffers, (state) => {
      state.offers.push(...Offers);
    });
});
