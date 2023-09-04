import { configureMockStore } from '@jedmao/redux-mock-store';
import { generatePath } from 'react-router-dom';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import { createApi } from '../services/api';
import { StateType, AppThunkDispatchType } from '../types/types';
import { APIPath } from '../const';
import { extractActionsTypes } from '../utils/mocks';
import { clearErrorAction, loadFavoritesAction, loadOfferDetailsAction, loadOffersAction, updateAuthStatusAction, loadOffersNearbyAction, loadReviewsListAction, loginUserAction, postReviewAction, logoutUserAction } from './api-actions';
import { updateAuthorisationStatus } from './user/user-slice';
import { addComment } from './reviews/reviews-slice';


describe('Async actions', () => {
  const axios = createApi();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<StateType, Action<string>, AppThunkDispatchType>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({});
  });

  it('should dispatch "updateAuthStatusAction.pending.type" and "updateAuthorisationStatus.type" and "updateAuthorisationStatus.type" and "clearErrorAction.pending.type" and "clearErrorAction.fulfilled.type" and "updateAuthStatusAction.fulfilled.type" with thunk "updateAuthStatusAction" when server response 200', async () => {
    mockAxiosAdapter.onGet(APIPath.Login).reply(200);
    await store.dispatch(updateAuthStatusAction());
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      updateAuthStatusAction.pending.type,
      updateAuthorisationStatus.type,
      updateAuthorisationStatus.type,
      clearErrorAction.pending.type,
      clearErrorAction.fulfilled.type,
      updateAuthStatusAction.fulfilled.type,
    ]);
  });

  it('should dispatch "updateAuthStatusAction.pending.type" and "updateAuthorisationStatus.type" and "clearErrorAction.pending.type" and "clearErrorAction.fulfilled.type" and "updateAuthStatusAction.fulfilled.type" with thunk "updateAuthStatusAction" when server response 400', async () => {
    mockAxiosAdapter.onGet(APIPath.Login).reply(400);
    await store.dispatch(updateAuthStatusAction());
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      updateAuthStatusAction.pending.type,
      updateAuthorisationStatus.type,
      clearErrorAction.pending.type,
      clearErrorAction.fulfilled.type,
      updateAuthStatusAction.fulfilled.type,
    ]);
  });

  it('should dispatch "loadOffersAction.pending.type" and "loadOffersAction.fulfilled.type" with thunk "loadOffersAction" when server response 200', async () => {
    mockAxiosAdapter.onGet(APIPath.Offers).reply(200);
    await store.dispatch(loadOffersAction());
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      loadOffersAction.pending.type,
      loadOffersAction.fulfilled.type
    ]);
  });

  it('should dispatch "loadOffersAction.pending.type" "clearErrorAction.pending.type" and "clearErrorAction.fulfilled.type" and "loadOffersAction.fulfilled.type" with thunk "loadOffersAction" when server response 400', async () => {
    mockAxiosAdapter.onGet(APIPath.Offers).reply(400);
    await store.dispatch(loadOffersAction());
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      loadOffersAction.pending.type,
      clearErrorAction.pending.type,
      clearErrorAction.fulfilled.type,
      loadOffersAction.fulfilled.type,
    ]);
  });

  it('should dispatch "loadFavoritesAction.pending.type" and "loadFavoritesAction.fulfilled.type" with thunk "loadFavoritesAction" when server response 200', async () => {
    mockAxiosAdapter.onGet(APIPath.Favorite).reply(200);
    await store.dispatch(loadFavoritesAction());
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      loadFavoritesAction.pending.type,
      loadFavoritesAction.fulfilled.type
    ]);
  });

  it('should dispatch "loadFavoritesAction.pending.type" and "clearErrorAction.pending.type" and "clearErrorAction.fulfilled.type" and "loadFavoritesAction.fulfilled.type" with thunk "loadFavoritesAction" when server response 400', async () => {
    mockAxiosAdapter.onGet(APIPath.Favorite).reply(400);
    await store.dispatch(loadFavoritesAction());
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      loadFavoritesAction.pending.type,
      clearErrorAction.pending.type,
      clearErrorAction.fulfilled.type,
      loadFavoritesAction.fulfilled.type
    ]);
  });

  it('should dispatch "loadOfferDetailsAction.pending.type" and "clearErrorAction.pending.type" and "clearErrorAction.fulfilled.type" and "loadOfferDetailsAction.fulfilled.type" with thunk "loadOfferDetailsAction" when server response 200', async () => {
    const mockOfferId = '1';
    mockAxiosAdapter.onGet(APIPath.OfferId, {offerId: mockOfferId}).reply(200);
    await store.dispatch(loadOfferDetailsAction(mockOfferId));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      loadOfferDetailsAction.pending.type,
      clearErrorAction.pending.type,
      clearErrorAction.fulfilled.type,
      loadOfferDetailsAction.fulfilled.type
    ]);
  });

  it('should dispatch "loadOfferDetailsAction.pending.type" and "clearErrorAction.pending.type" and "clearErrorAction.fulfilled.type" and "loadOfferDetailsAction.fulfilled.type" with thunk "loadOfferDetailsAction" when server response 400', async () => {
    const mockOfferId = '1';
    mockAxiosAdapter.onGet(APIPath.OfferId, {offerId: mockOfferId}).reply(400);
    await store.dispatch(loadOfferDetailsAction(mockOfferId));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      loadOfferDetailsAction.pending.type,
      clearErrorAction.pending.type,
      clearErrorAction.fulfilled.type,
      loadOfferDetailsAction.fulfilled.type
    ]);
  });

  it('should dispatch "loadOffersNearbyAction.pending.type" and "clearErrorAction.pending.type" and "clearErrorAction.fulfilled.type" and "loadOffersNearbyAction.fulfilled.type" with thunk "loadOffersNearbyAction" when server response 200', async () => {
    const mockOfferId = '1';
    mockAxiosAdapter.onGet(APIPath.OffersNearby, {offerId: mockOfferId}).reply(200);
    await store.dispatch(loadOffersNearbyAction(mockOfferId));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      loadOffersNearbyAction.pending.type,
      clearErrorAction.pending.type,
      clearErrorAction.fulfilled.type,
      loadOffersNearbyAction.fulfilled.type
    ]);
  });

  it('should dispatch "loadOffersNearbyAction.pending.type" and "clearErrorAction.pending.type" and "clearErrorAction.fulfilled.type" and "loadOffersNearbyAction.fulfilled.type" with thunk "loadOffersNearbyAction" when server response 400', async () => {
    const mockOfferId = '1';
    mockAxiosAdapter.onGet(APIPath.OffersNearby, {offerId: mockOfferId}).reply(400);
    await store.dispatch(loadOffersNearbyAction(mockOfferId));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      loadOffersNearbyAction.pending.type,
      clearErrorAction.pending.type,
      clearErrorAction.fulfilled.type,
      loadOffersNearbyAction.fulfilled.type
    ]);
  });

  it('should dispatch "loadReviewsListAction.pending.type" and "clearErrorAction.pending.type" and "clearErrorAction.fulfilled.type" and "loadReviewsListAction.fulfilled.type" with thunk "loadReviewsListAction" when server response 200', async () => {
    const mockOfferId = '1';
    mockAxiosAdapter.onGet(APIPath.Reviews, {offerId: mockOfferId}).reply(200);
    await store.dispatch(loadReviewsListAction(mockOfferId));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      loadReviewsListAction.pending.type,
      clearErrorAction.pending.type,
      clearErrorAction.fulfilled.type,
      loadReviewsListAction.fulfilled.type
    ]);
  });

  it('should dispatch "loadReviewsListAction.pending.type" and "clearErrorAction.pending.type" and "clearErrorAction.fulfilled.type" and "loadReviewsListAction.fulfilled.type" with thunk "loadReviewsListAction" when server response 400', async () => {
    const mockOfferId = '1';
    mockAxiosAdapter.onGet(APIPath.Reviews, {offerId: mockOfferId}).reply(400);
    await store.dispatch(loadReviewsListAction(mockOfferId));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      loadReviewsListAction.pending.type,
      clearErrorAction.pending.type,
      clearErrorAction.fulfilled.type,
      loadReviewsListAction.fulfilled.type
    ]);
  });

  it('should dispatch "loginUserAction.pending.type" and "clearErrorAction.pending.type" and "clearErrorAction.fulfilled.type" and "loginUserAction.fulfilled.type" with thunk "loadReviewsListAction" when server response 200', async () => {
    const mockEmail = 'test@test.com';
    const mockPassword = 'q1';
    mockAxiosAdapter.onGet(APIPath.Reviews, {email: mockEmail, password: mockPassword}).reply(200);
    await store.dispatch(loginUserAction({email: mockEmail, password: mockPassword}));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      loginUserAction.pending.type,
      updateAuthorisationStatus.type,
      clearErrorAction.pending.type,
      clearErrorAction.fulfilled.type,
      loginUserAction.fulfilled.type
    ]);
  });

  it('should dispatch "loginUserAction.pending.type" and "clearErrorAction.pending.type" and "clearErrorAction.fulfilled.type" and "loginUserAction.fulfilled.type" with thunk "loadReviewsListAction" when server response 400', async () => {
    const mockEmail = 'test@test.com';
    const mockPassword = 'q1';
    mockAxiosAdapter.onGet(APIPath.Reviews, {email: mockEmail, password: mockPassword}).reply(400);
    await store.dispatch(loginUserAction({email: mockEmail, password: mockPassword}));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      loginUserAction.pending.type,
      updateAuthorisationStatus.type,
      clearErrorAction.pending.type,
      clearErrorAction.fulfilled.type,
      loginUserAction.fulfilled.type
    ]);
  });

  it('should dispatch "postReviewAction.pending.type" and  "clearErrorAction.pending.type" and  "clearErrorAction.fulfilled.type" and "postReviewAction.rejected.type" with thunk "postReviewAction" when server response 200', async () => {
    const mockOfferId = '1';
    const mockComment = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ';
    const mockRating = 4;
    mockAxiosAdapter.onPost(generatePath(APIPath.Reviews, {offerId: mockOfferId})).reply(200);
    await store.dispatch(postReviewAction({id: mockOfferId, comment: mockComment, rating: mockRating}));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      postReviewAction.pending.type,
      addComment.type,
      postReviewAction.fulfilled.type,
    ]);
  });

  it('should dispatch "postReviewAction.pending.type" and  "clearErrorAction.pending.type" and  "clearErrorAction.fulfilled.type" and "postReviewAction.rejected.type" with thunk "postReviewAction" when server response 400', async () => {
    const mockOfferId = '1';
    const mockComment = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ';
    const mockRating = 4;
    mockAxiosAdapter.onPost(generatePath(APIPath.Reviews, {offerId: mockOfferId})).reply(400);
    await store.dispatch(postReviewAction({id: mockOfferId, comment: mockComment, rating: mockRating}));
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      postReviewAction.pending.type,
      clearErrorAction.pending.type,
      clearErrorAction.fulfilled.type,
      postReviewAction.rejected.type,
    ]);
  });

  it('should dispatch "logoutUserAction.pending.type" and  "clearErrorAction.pending.type" and "clearErrorAction.fulfilled.type" and "logoutUserAction.fulfilled.type", with thunk "logoutUserAction" when server response 200', async () => {
    mockAxiosAdapter.onDelete(APIPath.Logout).reply(200);
    await store.dispatch(logoutUserAction());
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      logoutUserAction.pending.type,
      updateAuthorisationStatus.type,
      logoutUserAction.fulfilled.type,
    ]);
  });

  it('should dispatch "logoutUserAction.pending.type" and  "clearErrorAction.pending.type" and "clearErrorAction.fulfilled.type" and "logoutUserAction.fulfilled.type", with thunk "logoutUserAction" when server response 400', async () => {
    mockAxiosAdapter.onDelete(APIPath.Logout).reply(400);
    await store.dispatch(logoutUserAction());
    const actions = extractActionsTypes(store.getActions());

    expect(actions).toEqual([
      logoutUserAction.pending.type,
      clearErrorAction.pending.type,
      clearErrorAction.fulfilled.type,
      logoutUserAction.fulfilled.type,
    ]);
  });

});

