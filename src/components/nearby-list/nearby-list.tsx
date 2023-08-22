import PlaceCard from '../place-card/place-card';
import { PlaceCardDesign, AppPath } from '../../const';
import { useAppSelector } from '../../hooks';
import { selectOffersNearby } from '../../store/offers-nearby/offers-nearby-selectors';


export function NearbyList(): JSX.Element {
  const designProps = PlaceCardDesign[AppPath.Offer];
  const offers = useAppSelector(selectOffersNearby);
  return (
    <section className="near-places places">
      <h2 className="near-places__title">{offers.length === 0 && 'No '}Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.map(
          (offer) => (
            <PlaceCard
              key={offer.id}
              offer={offer}
              {...designProps}
            />)
        )}
      </div>
    </section>

  );
}
