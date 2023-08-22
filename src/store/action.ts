import {createAction} from '@reduxjs/toolkit';
import { Action, NameSpace } from '../const';
import { AppPathType } from '../types/types';

export const redirectToRoute = createAction<AppPathType>(`${NameSpace.Route}/${Action.Redirect}`);


