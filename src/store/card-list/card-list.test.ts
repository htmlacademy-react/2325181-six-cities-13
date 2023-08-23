import { CardListStateType, cardlist, updateLocation, updateSortOrder } from './card-list-slice';
import { Locations, SortOrders } from '../../const';

describe ('Cardlist Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState: CardListStateType = {
      location: Locations.Paris,
      activeSortOrder: SortOrders.Popular.order,
    };
    const result = cardlist.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState: CardListStateType = {
      location: Locations.Paris,
      activeSortOrder: SortOrders.Popular.order,
    };
    const result = cardlist.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should update location with \'updateLocation\' action ', () => {
    const initialState: CardListStateType = {
      location: Locations.Paris,
      activeSortOrder: SortOrders.Popular.order,
    };
    const expectedState: CardListStateType = {
      location: Locations.Amsterdam,
      activeSortOrder: SortOrders.Popular.order,
    };
    const result = cardlist.reducer(initialState, updateLocation(Locations.Amsterdam));
    expect(result.location).toBe(expectedState.location);
  });

  it('should update sort order with \'updateSortOrder\' action', () => {
    const initialState: CardListStateType = {
      location: Locations.Paris,
      activeSortOrder: SortOrders.Popular.order,
    };
    const expectedState: CardListStateType = {
      location: Locations.Amsterdam,
      activeSortOrder: SortOrders.PriceAscending.order,
    };
    const result = cardlist.reducer(initialState, updateSortOrder(SortOrders.PriceAscending.order));
    expect(result.activeSortOrder).toBe(expectedState.activeSortOrder);
  });

});

