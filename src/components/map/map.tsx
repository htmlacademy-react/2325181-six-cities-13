import {useRef, useEffect, CSSProperties} from 'react';
import {Icon, layerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { useAppSelector } from '../../hooks';
import { selectLocation } from '../../store/card-list/card-list.selectors';
import { selectOfferDetails} from '../../store/offer-details/offer-details.selectors';
import { OfferCoordinatesType } from '../../types/types';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import { getIconObject } from '../../helper';

export type MapProps = {
  offers: OfferCoordinatesType [];
  classAdded: string;
  mapStyle?: CSSProperties;
}

const defaultCustomIcon = new Icon(getIconObject(URL_MARKER_DEFAULT));
const currentCustomIcon = new Icon(getIconObject(URL_MARKER_CURRENT));


export function Map({offers, classAdded, mapStyle}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const location = useAppSelector(selectLocation);
  const map = useMap(mapRef, location);
  const selectedOfferId = useAppSelector(selectOfferDetails)?.id;
  useEffect(() => {
    const setIconStyle = (offer: OfferCoordinatesType) => {
      if (offer.id === selectedOfferId) {
        return currentCustomIcon;
      }
      return defaultCustomIcon;
    };
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.latitude,
          lng: offer.longitude
        });

        marker
          .setIcon(
            setIconStyle(offer)
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOfferId, classAdded]);

  return (
    <section
      className={classAdded}
      ref={mapRef}
      style={mapStyle}
    />
  );
}
