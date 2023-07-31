import {createAction} from '@reduxjs/toolkit';
import { LocationType } from '../types/types';

export const changeLocation = createAction('location/change', (newLocation: LocationType) => ({
  payload: newLocation
})
);
