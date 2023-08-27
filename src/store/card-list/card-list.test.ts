import { CardListStateType, cardList, updateLocation, updateSortOrder } from './card-list-slice';
import { Location, SortOrders } from '../../const';

describe ('CardList Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState: CardListStateType = {
      location: Location.Paris,
      activeSortOrder: SortOrders.Popular.order,
    };
    const result = cardList.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState: CardListStateType = {
      location: Location.Paris,
      activeSortOrder: SortOrders.Popular.order,
    };
    const result = cardList.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should update location with \'updateLocation\' action ', () => {
    const initialState: CardListStateType = {
      location: Location.Paris,
      activeSortOrder: SortOrders.Popular.order,
    };
    const expectedState: CardListStateType = {
      location: Location.Amsterdam,
      activeSortOrder: SortOrders.Popular.order,
    };
    const result = cardList.reducer(initialState, updateLocation(Location.Amsterdam));
    expect(result.location).toBe(expectedState.location);
  });

  it('should update sort order with \'updateSortOrder\' action', () => {
    const initialState: CardListStateType = {
      location: Location.Paris,
      activeSortOrder: SortOrders.Popular.order,
    };
    const expectedState: CardListStateType = {
      location: Location.Amsterdam,
      activeSortOrder: SortOrders.PriceAscending.order,
    };
    const result = cardList.reducer(initialState, updateSortOrder(SortOrders.PriceAscending.order));
    expect(result.activeSortOrder).toBe(expectedState.activeSortOrder);
  });

});

