import {PlaceCard } from '../place-card/place-card';
import { PlaceCardDesign, AppPath } from '../../const';
import { OffersType } from '../../types/types';

type NearbyListProps = {
  offers: OffersType;
};

export function NearbyList({offers}: NearbyListProps): JSX.Element {
  const design = PlaceCardDesign[AppPath.Offer];
  return (
    <>
      {offers.map(
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
    </>
  );
}
