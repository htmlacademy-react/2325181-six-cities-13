import { NameSpace } from '../../const';
import { StateType } from '../../types/types';

export const selectAuthorisationStatus = (state: StateType) => state[NameSpace.User].authorisationStatus;

export const selectEmail = (state: StateType) => state[NameSpace.User].email;
