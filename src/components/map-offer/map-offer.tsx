import { Map } from '../map/map';
import { MapDesign, AppPath } from '../../const';
import { getOffersCoordinates } from '../../helper';
import { useAppSelector } from '../../hooks';
import { selectOffersNearby } from '../../selectors';


export default function MapOffer(): JSX.Element {
  const offers = useAppSelector(selectOffersNearby);
  const offersCoordinates = getOffersCoordinates(offers);
  return (
    <Map mapStyle={MapDesign[AppPath.Offer].style} classAdded= {MapDesign[AppPath.Offer].classAdded} offers={offersCoordinates}/>
  );

}
