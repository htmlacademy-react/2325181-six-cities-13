import { Map } from '../map/map';
import { MapDesign, AppPath } from '../../const';
import { getOffersCoordinates } from '../../helper';
import { useAppSelector } from '../../hooks';
import { selectOffersNearby } from '../../store/offers-nearby/offers-nearby-selectors';
import { selectOfferDetails } from '../../store/offer-details/offer-details-selectors';
import { OfferType } from '../../types/types';


export default function MapOffer(): JSX.Element {
  const offers = useAppSelector(selectOffersNearby);
  const activeOffer = useAppSelector(selectOfferDetails) as OfferType;
  const activeOfferCoordinates = getOffersCoordinates([activeOffer]);
  const offersCoordinates = getOffersCoordinates(offers);
  offersCoordinates.push(...activeOfferCoordinates);
  return (
    <Map mapStyle={MapDesign[AppPath.Offer].style} classAdded= {MapDesign[AppPath.Offer].classAdded} offers={offersCoordinates}/>
  );

}
