import { Map } from '../map/map';
import { MapDesign, AppPath } from '../../const';
import { OffersType } from '../../types/types';
import { getOffersCoordinates } from '../../helper';


type MapOfferProps = {
  offers: OffersType;
}

export default function MapOffer({offers}: MapOfferProps): JSX.Element {
  const offersCoordinates = getOffersCoordinates(offers);
  return (
    <Map mapStyle={MapDesign[AppPath.Offer].style} classAdded= {MapDesign[AppPath.Offer].classAdded} offers={offersCoordinates}/>
  );

}
