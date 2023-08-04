import { Map } from '../map/map';
import { AppPath, MapDesign } from '../../const';
import { OffersType } from '../../types/types';
import { getOffersCoordinates } from '../../helper';

type MapMainProps = {
  offers: OffersType;
}

export default function MapMain({offers}: MapMainProps): JSX.Element {
  const offersCoordinates = getOffersCoordinates(offers);
  return (
    <Map classAdded= {MapDesign[AppPath.Main].classAdded} offers={offersCoordinates}/>
  );

}
