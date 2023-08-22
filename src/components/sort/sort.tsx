import classNames from 'classnames';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { updateSortOrder } from '../../store/card-list/card-list-slice';
import { SortOrders} from '../../const';
import { ActiveSortOrderType } from '../../types/types';
import { selectActiveSortOrder } from '../../store/card-list/card-list-selectors';

export default function Sort(): JSX.Element {
  const activeOrder: ActiveSortOrderType = useAppSelector(selectActiveSortOrder);
  const [isOpened, setIsOpened] = useState(false);
  const dispatch = useAppDispatch();
  const handleSortTypeClick = (order: ActiveSortOrderType) => {
    dispatch(updateSortOrder(order));
    setIsOpened(false);
  };
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" onClick={() => setIsOpened(!isOpened)} tabIndex={0}>
        { SortOrders[activeOrder].title}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={classNames('places__options', 'places__options--custom', {'places__options--opened': isOpened, 'places__options--closed': !isOpened})}>
        {Object.entries(SortOrders).map(([, {order, title}]) =>
          <li key={order} className={classNames('places__option', {'places__option--active': activeOrder === order})} onClick={() => handleSortTypeClick(order)} tabIndex={0}>{title}</li>
        )}
      </ul>
    </form>
  );
}
