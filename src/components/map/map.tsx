import {useRef, useEffect, CSSProperties } from 'react';
import {Icon, layerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { useAppSelector } from '../../hooks/hooks';
import { selectLocation } from '../../store/card-list/card-list-selectors';
import { selectOfferId} from '../../store/offer-details/offer-details-selectors';
import { OfferCoordinatesType } from '../../types/types';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import { getIconObject } from '../../helper';

const defaultCustomIcon = new Icon(getIconObject(URL_MARKER_DEFAULT));
const currentCustomIcon = new Icon(getIconObject(URL_MARKER_CURRENT));

export type MapProps = {
  offers: OfferCoordinatesType [];
  classAdded: string;
  mapStyle?: CSSProperties;
}

export function Map({offers, classAdded, mapStyle}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const location = useAppSelector(selectLocation);
  const map = useMap(mapRef, location);
  const selectedOfferId = useAppSelector(selectOfferId);
  useEffect(() => {
    let isMounted = true;
    const setIconStyle = (offer: OfferCoordinatesType) => {
      if (offer.id === selectedOfferId) {
        return currentCustomIcon;
      }
      return defaultCustomIcon;
    };
    if (isMounted && map) {
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
    return () => {
      isMounted = false;
    };
  }, [map, offers, selectedOfferId, classAdded]);

  return (
    <section
      className={classAdded}
      ref={mapRef}
      style={mapStyle}
      data-testid='map-element'
    />
  );
}
