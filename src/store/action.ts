import {createAction} from '@reduxjs/toolkit';
import { Action, NameSpace } from '../const';
import { LocationType, ActiveSortOrderType } from '../types/types';

export const changeLocation = createAction(`${NameSpace.Location}/${Action.Update}`, (newLocation: LocationType) => ({
  payload: newLocation
}));

export const updateSortOrder = createAction(`${NameSpace.Sorting}/${Action.Update}`, (newSorting: ActiveSortOrderType) => ({
  payload: newSorting
}));
