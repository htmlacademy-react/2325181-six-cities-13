import {createAction} from '@reduxjs/toolkit';
import { Action, NameSpace } from '../const';
import { LocationType, ActiveSortOrderType, OffersType, AuthorisationStatusType, OfferType, ReviewsType } from '../types/types';

export const updateLocation = createAction<LocationType>(`${NameSpace.Location}/${Action.Update}`);

export const updateSortOrder = createAction<ActiveSortOrderType>(`${NameSpace.Sorting}/${Action.Update}`);

export const setOfferId = createAction<string>(`${NameSpace.OfferId}/${Action.Set}`);

export const loadOffers = createAction<OffersType>(`${NameSpace.Offers}/${Action.Load}`);

export const setDataLoadingStatus = createAction<boolean>(`${NameSpace.LoadingStatus}/${Action.Set}`);

export const updateAuthorisationStatus = createAction<AuthorisationStatusType>(`${NameSpace.AuthorisationStatus}/${Action.Update}`);

export const loadOfferDetails = createAction<OfferType>(`${NameSpace.Offer}/${Action.Load}`);

export const loadReviewsList = createAction<ReviewsType>(`${NameSpace.Reviews}/${Action.Load}`);

export const loadOffersNearby = createAction<OffersType>(`${NameSpace.OffersNearby}/${Action.Load}`);
