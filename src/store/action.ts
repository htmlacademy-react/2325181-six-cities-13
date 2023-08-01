import {createAction} from '@reduxjs/toolkit';
import { Action, NameSpace } from '../const';
import { LocationType } from '../types/types';

export const changeLocation = createAction(`${NameSpace.Location}/${Action.Update}`, (newLocation: LocationType) => ({
  payload: newLocation
})
);


