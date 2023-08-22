import classNames from 'classnames';
import { Link} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectLocation } from '../../store/card-list/card-list-selectors';
import { updateLocation } from '../../store/card-list/card-list-slice';
import { AppPath, Locations } from '../../const';
import { LocationType} from '../../types/types';

export default function Location(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeLocation = useAppSelector(selectLocation);
  const handleLocationChange = (location: LocationType) => {
    if (location !== activeLocation){
      dispatch(updateLocation(location));
    }
  };
  return (
    <ul className="locations__list tabs__list">
      {Object.values(Locations).map((location: LocationType) => (
        <li className="locations__item" key={location}>
          <Link
            className={classNames('locations__item-link tabs__item', {'tabs__item--active': location === activeLocation})}
            onClick={() => handleLocationChange(location)}
            to={AppPath.Main}
          >
            <span>{location}</span>
          </Link>
        </li>)
      )}
    </ul>
  );
}
