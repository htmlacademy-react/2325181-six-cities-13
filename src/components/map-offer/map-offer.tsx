import { MapDesign, AppPath } from '../../const';
import { Map, MapProps } from '../map/map';

type MapOfferOmitType = 'mapStyle' | 'classAdded';

type MapOfferProps = Omit<MapProps, MapOfferOmitType>

export default function MapOffer(props: MapOfferProps): JSX.Element {
  return (
    <Map mapStyle={MapDesign[AppPath.Offer].style} classAdded= {MapDesign[AppPath.Offer].classAdded} {...props}/>
  );

}
