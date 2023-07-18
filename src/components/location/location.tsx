import {useState} from 'react';
import { Link} from 'react-router-dom';
import { AppPath, Locations } from '../../const';
import { LocationType } from '../../types/types';

export default function Location(): JSX.Element {
  const [activeLocation, setActiveLocation] = useState('Amsterdam');
  const LocationClickHandler = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    const locationName = evt.currentTarget.textContent;
    if (typeof locationName === 'string') {
      setActiveLocation(locationName);
    }
  };
  return (
    <ul className="locations__list tabs__list">
      {Object.values(Locations).map((location: LocationType) => (
        <li className="locations__item" key={location}>
          <Link
            className={`locations__item-link tabs__item ${location === activeLocation ? 'tabs__item--active' : ''}`}
            onClick={LocationClickHandler}
            to={AppPath.Main}
          >
            <span>{location}</span>
          </Link>
        </li>)
      )}
    </ul>
  );
}
