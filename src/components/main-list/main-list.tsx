import { useAppSelector } from '../../hooks';
import { PlaceCard, PlaceCardProps } from '../place-card/place-card';
import Sort from '../../components/sort/sort';
import { PlaceCardDesign, AppPath } from '../../const';
import { OffersType } from '../../types/types';


type MainListProps = {offers: OffersType} & Pick<PlaceCardProps, 'onCardHover' | 'onCardLeave'>;

export default function MainList({offers, onCardHover, onCardLeave}: MainListProps): JSX.Element {
  const designProps = PlaceCardDesign[AppPath.Main];
  const activeLocation = useAppSelector((state) => state.location);
  return (
    <>
      <b className="places__found">{offers.length} places to stay in {activeLocation}</b>
      <Sort />
      <div className="cities__places-list places__list tabs__content">
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
      </div>
    </>
  );
}
