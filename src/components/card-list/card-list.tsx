import { OffersType } from '../../types/types';
import { CardMain } from '../card-main/card-main';

type CardListProps = {
  offers: OffersType;
  onCardHover: (id: string) => void;
  onCardLeave?: () => void;
}

export default function CardList({offers, onCardHover, onCardLeave}: CardListProps): JSX.Element {

  return (
    <>
      {offers.map(
        (offer) => <CardMain key={offer.id} offer={offer} onCardHover={onCardHover} onCardLeave={onCardLeave} />
      )}
    </>
  );
}
