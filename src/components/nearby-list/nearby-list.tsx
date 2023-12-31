import PlaceCard from '../place-card/place-card';
import { selectOffersNearby } from '../../store/offers-nearby/offers-nearby-selectors';
import { useAppSelector } from '../../hooks/hooks';
import { PlaceCardDesign, AppPath } from '../../const';


export default function NearbyList(): JSX.Element {
  const designProps = PlaceCardDesign[AppPath.Offer];
  const offers = useAppSelector(selectOffersNearby);
  return (
    <section className="near-places places" data-testid='nearby-list-container'>
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
