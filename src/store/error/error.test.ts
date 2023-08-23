import { ErrorStateType, error, setError } from './error-slice';

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
      error: 'Lorem ipsum dolor sit amet',
    };
    const result = error.reducer(initialState, setError('Lorem ipsum dolor sit amet'));
    expect(result.error).toBe(expectedState.error);
  });

});
