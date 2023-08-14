import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

export type ErrorStateType = {
  error: string | null;
};

const errorState: ErrorStateType = {
  error: null,
};

export const error = createSlice({
  name: NameSpace.Error,
  initialState: errorState,
  reducers: {
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  }
});

export const {setError} = error.actions;
