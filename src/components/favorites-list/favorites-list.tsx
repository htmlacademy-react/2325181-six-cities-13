import { Link } from 'react-router-dom';
import { PlaceCard } from '../place-card/place-card';
import { PlaceCardDesign, AppPath } from '../../const';
import { OffersType } from '../../types/types';

type FavoriteLocationProps = {
  groupByLocation: [string, OffersType][];
}

export default function FavoritesList ({groupByLocation}: FavoriteLocationProps): JSX.Element {
  const design = PlaceCardDesign[AppPath.Favorites];
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {groupByLocation.map(([locationName, locationOffers]) => (
          <li className="favorites__locations-items" key={locationName}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link className="locations__item-link"
                  to={AppPath.Main}
                >
                  <span>{locationName}</span>
                </Link>
              </div>
            </div>
            <div className="favorites__places">
              {locationOffers.map(
                (offer) => (
                  <PlaceCard
                    key={offer.id}
                    offer={offer}
                    cardClass={design.cardClass}
                    cardInfoClass={design.cardInfoClass}
                    cardWidth={design.cardWidth}
                    cardHeight={design.cardHeight}
                  />)
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
