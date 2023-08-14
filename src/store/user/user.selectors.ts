import { NameSpace } from '../../const';
import { State } from '../../types/types';

export const selectAuthorisationStatus = (state: State) => state[NameSpace.User].authorisationStatus;

export const selectEmail = (state: State) => state[NameSpace.User].email;
