import { AuthorisationStatus } from '../../const';
import { AuthorisationStatusType } from '../../types/types';
import { UserStateType, user, updateAuthorisationStatus, setEmail } from './user-slice';

describe('Favorites Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState: UserStateType = {
      authorisationStatus: AuthorisationStatus.Unknown,
      email: ''
    };
    const result = user.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState: UserStateType = {
      authorisationStatus: AuthorisationStatus.Unknown,
      email: ''
    };
    const result = user.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "authorisationStatus" to new authorisation status type with "updateAuthorisationStatus"', () => {
    const initialState: UserStateType = {
      authorisationStatus: AuthorisationStatus.Unknown,
      email: ''
    };
    const mockAuthorisationStatus: AuthorisationStatusType = AuthorisationStatus.Auth;
    const expectedState: UserStateType = {
      authorisationStatus: mockAuthorisationStatus,
      email: ''
    };
    const result = user.reducer(initialState, updateAuthorisationStatus(mockAuthorisationStatus));
    expect(result).toEqual(expectedState);
  });

  it('should set "email" to new value with "setEmail"', () => {
    const initialState: UserStateType = {
      authorisationStatus: AuthorisationStatus.Unknown,
      email: ''
    };
    const MOCK_EMAIL = 'test@test.com';
    const expectedState: UserStateType = {
      authorisationStatus: AuthorisationStatus.Unknown,
      email: MOCK_EMAIL
    };
    const result = user.reducer(initialState, setEmail(MOCK_EMAIL));
    expect(result).toEqual(expectedState);
  });
});
