import { PlaceCard, PlaceCardProps } from '../place-card/place-card';
import { PlaceCardDesign, AppPath } from '../../const';
import { OffersType } from '../../types/types';

type MainListProps = {offers: OffersType} & Pick<PlaceCardProps, 'onCardHover' | 'onCardLeave'>;

export default function MainList({offers, onCardHover, onCardLeave}: MainListProps): JSX.Element {
  const designProps = PlaceCardDesign[AppPath.Main];
  return (
    <>
      {offers.map(
        (offer) => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            onCardHover={onCardHover}
            onCardLeave={onCardLeave}
            {...designProps}
          />)
      )}
    </>
  );
}
