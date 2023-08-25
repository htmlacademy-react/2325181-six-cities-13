import { ErrorStateType, error, setError } from './error-slice';
import { MOCK_MESSAGE } from '../../const';

describe('Error Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState: ErrorStateType = {
      error: null,
    };
    const result = error.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState: ErrorStateType = {
      error: null,
    };
    const result = error.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it ('should set Error message with setError action', () => {
    const initialState: ErrorStateType = {
      error: null,
    };

    const expectedState: ErrorStateType = {
      error: MOCK_MESSAGE,
    };
    const result = error.reducer(initialState, setError(MOCK_MESSAGE));
    expect(result.error).toBe(expectedState.error);
  });

});
