import {PlaceCard, PlaceCardProps} from '../place-card/place-card';
import { CardOmitType } from '../card-main/card-main';
import { PlaceCardDesign, AppPath } from '../../const';

type CardFavoritesProps = Omit<PlaceCardProps, CardOmitType>;

export function CardFavorites(props: CardFavoritesProps): JSX.Element {
  const design = PlaceCardDesign[AppPath.Favorites];
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
