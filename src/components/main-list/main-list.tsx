import { useAppSelector } from '../../hooks';
import { PlaceCard, PlaceCardProps } from '../place-card/place-card';
import Sort from '../../components/sort/sort';
import { PlaceCardDesign, AppPath, SortOrders } from '../../const';
import { OffersType, ActiveSortOrderType } from '../../types/types';
import { InitialStateType } from '../../store/reducer';


type MainListProps = {offers: OffersType} & Pick<PlaceCardProps, 'onCardHover' | 'onCardLeave'>;

export default function MainList({offers, onCardHover, onCardLeave}: MainListProps): JSX.Element {
  const designProps = PlaceCardDesign[AppPath.Main];
  const activeLocation = useAppSelector((state) => state.location);
  const activeOrder: ActiveSortOrderType = useAppSelector((state: InitialStateType) => state.activeSortOrder);
  const sortedOffers: OffersType = SortOrders[activeOrder]?.callback(offers);
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {activeLocation}</b>
      <Sort />
      <div className="cities__places-list places__list tabs__content">
        {sortedOffers.map(
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
    </section>
  );
}
