import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthorisationStatus, NameSpace } from '../../const';
import { AuthorisationStatusType } from '../../types/types';

export type UserStateType = {

  authorisationStatus: AuthorisationStatusType;
  email: string;
}

export const userState: UserStateType = {
  authorisationStatus: AuthorisationStatus.Unknown,
  email: ''
};

export const user = createSlice({
  name: NameSpace.User,
  initialState: userState,
  reducers: {
    updateAuthorisationStatus: (state, action: PayloadAction<AuthorisationStatusType>) => {
      state.authorisationStatus = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  }
});

export const {updateAuthorisationStatus, setEmail} = user.actions;
