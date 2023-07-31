import {PlaceCard } from '../place-card/place-card';
import { PlaceCardDesign, AppPath } from '../../const';
import { OffersType } from '../../types/types';

type NearbyListProps = {
  offers: OffersType;
};

export function NearbyList({offers}: NearbyListProps): JSX.Element {
  const designProps = PlaceCardDesign[AppPath.Offer];
  return (
    <>
      {offers.map(
        (offer) => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            {...designProps}
          />)
      )}
    </>
  );
}
