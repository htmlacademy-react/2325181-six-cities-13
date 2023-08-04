import {createAction} from '@reduxjs/toolkit';
import { Action, NameSpace } from '../const';
import { LocationType, ActiveSortOrderType } from '../types/types';

export const updateLocation = createAction<LocationType>(`${NameSpace.Location}/${Action.Update}`);

export const updateSortOrder = createAction<ActiveSortOrderType>(`${NameSpace.Sorting}/${Action.Update}`);

export const setOfferId = createAction<string>(`${NameSpace.OfferId}/${Action.Set}`);
