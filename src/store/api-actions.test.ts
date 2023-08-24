import { configureMockStore } from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { createApi } from '../services/api';
import { StateType, AppThunkDispatchType } from '../types/types';
import { AppPath, AuthorisationStatus } from '../const';
import { extractActionsTypes } from '../utils/mocks';
import { updateAuthStatusAction } from './api-actions';


describe('Async actions', () => {
  const axios = createApi();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<StateType, Action<string>, AppThunkDispatchType>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({user: {authorisationStatus: AuthorisationStatus.Unknown, email: ''}});
  });

  it('should dispatch "updateAuthStatusAction.pending" and "updateAuthStatusAction.fulfilled" with thunk "updateAuthStatusAction" when server response 200', async () => {
    mockAxiosAdapter.onGet(AppPath.Login).reply(200);
    await store.dispatch(updateAuthStatusAction());
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      updateAuthStatusAction.pending.type,
      updateAuthStatusAction.fulfilled.type,
    ]);
  });
});
