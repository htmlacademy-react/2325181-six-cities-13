import { Link} from 'react-router-dom';
import { AppPath, Locations } from '../../const';
import { LocationType, ChangeLocationType } from '../../types/types';

type LocationProps = {
  activeLocation: LocationType;
  changeLocation: ChangeLocationType;
}

export default function Location({activeLocation, changeLocation}: LocationProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {Object.values(Locations).map((location: LocationType) => (
        <li className="locations__item" key={location}>
          <Link
            className={`locations__item-link tabs__item ${location === activeLocation ? 'tabs__item--active' : ''}`}
            onClick={() => changeLocation(location)}
            to={AppPath.Main}
          >
            <span>{location}</span>
          </Link>
        </li>)
      )}
    </ul>
  );
}
