import { useState } from 'react';
import { OffersType } from '../../types/types';
import PlaceCard from '../place-card/place-card';

type CardListProps = {
  offers: OffersType;
}

export default function CardList({offers}: CardListProps): JSX.Element {
  const [, setOfferId] = useState('');
  return (
    <>
      {offers.map(
        (offer) => <PlaceCard key={offer.id} offer={offer} onCardHover={() => setOfferId(offer.id)} onCardLeave={() => setOfferId('')} />
      )}
    </>
  );
}
