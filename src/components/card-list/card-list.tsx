import { OffersType } from '../../types/types';
import PlaceCard from '../place-card/place-card';

type CardListProps = {
  offers: OffersType;
  onCardHover: (id: string) => void;
  onCardLeave?: () => void;
}

export default function CardList({offers, onCardHover, onCardLeave}: CardListProps): JSX.Element {

  return (
    <>
      {offers.map(
        (offer) => <PlaceCard key={offer.id} offer={offer} onCardHover={onCardHover} onCardLeave={onCardLeave} />
      )}
    </>
  );
}
