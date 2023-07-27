import {PlaceCard, PlaceCardProps} from '../place-card/place-card';
import { CardOmitType } from '../card-main/card-main';
import { PlaceCardDesign, AppPath } from '../../const';
type CardOfferProps = Omit<PlaceCardProps, CardOmitType>;

export function CardOffer(props: CardOfferProps): JSX.Element {
  const design = PlaceCardDesign[AppPath.Offer];
  return (
    <PlaceCard
      {...props}
      cardClass={design.cardClass}
      cardInfoClass={design.cardInfoClass}
      cardWidth={design.cardWidth}
      cardHeight={design.cardHeight}
    />
  );
}
