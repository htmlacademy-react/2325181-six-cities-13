import { createReducer } from '@reduxjs/toolkit';
import { changeLocation } from './action';
import { Locations } from '../const';
import { LocationType } from '../types/types';


type InitialStateType = {
  location: LocationType;
}

const initialState: InitialStateType = {
  location: Locations.Paris
};

export const locationReducer = createReducer(initialState, (builer) => {
  builer.addCase(changeLocation, (state, action) => {
    state.location = action.payload;
  });
});
