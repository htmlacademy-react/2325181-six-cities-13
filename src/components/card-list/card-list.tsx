import { useState } from 'react';
import { Offers } from '../../types/types';
import PlaceCard from '../place-card/place-card';

type CardListProps = {
  offers: Offers;
}

export default function CardList({offers}: CardListProps): JSX.Element {
  const [offerId, setOfferId] = useState('');
  console.log(offerId);
  return (
    <>
      {offers.map(
        (offer) => <PlaceCard key={offer.id} offer={offer} isFavoritePage={false} onCardHover={() => setOfferId(offer.id)} onCardLeave={() => setOfferId('')} />
      )}
    </>
  );
}
