import { useState } from 'react';
import { OffersType } from '../../types/types';
import { CardFormat } from '../../const';
import PlaceCard from '../place-card/place-card';

type CardListProps = {
  offers: OffersType;
}

export default function CardList({offers}: CardListProps): JSX.Element {
  const [offerId, setOfferId] = useState('');
  console.log(offerId);
  return (
    <>
      {offers.map(
        (offer) => <PlaceCard key={offer.id} offer={offer} cardFormat={CardFormat.cities} onCardHover={() => setOfferId(offer.id)} onCardLeave={() => setOfferId('')} />
      )}
    </>
  );
}
