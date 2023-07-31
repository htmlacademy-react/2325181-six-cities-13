import {PlaceCard, PlaceCardProps} from '../place-card/place-card';
import { PlaceCardDesign, AppPath } from '../../const';

export type CardOmitType = 'cardClass' | 'cardInfoClass' | 'cardWidth' | 'cardHeight';

type CardMainProps = Omit<PlaceCardProps, CardOmitType>;

export function CardMain(props: CardMainProps): JSX.Element {
  const design = PlaceCardDesign[AppPath.Main];
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
