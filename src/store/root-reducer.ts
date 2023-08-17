import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { cardlist } from './card-list/card-list.slice';
import { error } from './error/error.slice';
import { offerDetails } from './offer-details/offer-details.slice';
import { offers } from './offers/offers.slice';
import { user } from './user/user.slice';
import { comment } from './comment/comment.slice';
import { offersNearby } from './offers-nearby/offers-nearby.slice';
import { reviews } from './reviews/reviews.slice';
import { favorites } from './favorties/favorites.slice';

export const rootReducer = combineReducers({
  [NameSpace.CardList]: cardlist.reducer,
  [NameSpace.Error]: error.reducer,
  [NameSpace.OfferDetails]: offerDetails.reducer,
  [NameSpace.Offers]: offers.reducer,
  [NameSpace.User]: user.reducer,
  [NameSpace.Review]: comment.reducer,
  [NameSpace.OffersNearby]: offersNearby.reducer,
  [NameSpace.Reviews]: reviews.reducer,
  [NameSpace.Favorites]: favorites.reducer
});
