import PlaceCard from '../place-card/place-card';
import Sort from '../../components/sort/sort';
import MapMain from '../map-main/map-main';
import { useAppSelector } from '../../hooks/hooks';
import { selectLocation, selectActiveSortOrder } from '../../store/card-list/card-list-selectors';
import { PlaceCardDesign, AppPath } from '../../const';
import { OffersType, ActiveSortOrderType } from '../../types/types';
import { getPlural, sortOffers } from '../../helper';


type MainListProps = {offers: OffersType};

export default function MainList({offers}: MainListProps): JSX.Element {
  const designProps = PlaceCardDesign[AppPath.Main];
  const activeLocation = useAppSelector(selectLocation);
  const activeOrder: ActiveSortOrderType = useAppSelector(selectActiveSortOrder);
  const sortedOffers: OffersType = sortOffers(offers, activeOrder);
  return (
    <>
      <section className="cities__places places" data-testid='main-list-container'>
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{sortedOffers.length} {getPlural('place', sortedOffers.length)} to stay in {activeLocation}</b>
        <Sort />
        <div className="cities__places-list places__list tabs__content">
          {sortedOffers.map(
            (offer) => (
              <PlaceCard
                key={offer.id}
                offer={offer}
                {...designProps}
              />)
          )}
        </div>
      </section>
      <div className="cities__right-section">
        <MapMain offers={sortedOffers} />
      </div>
    </>
  );
}
