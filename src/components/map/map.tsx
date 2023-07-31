import {useRef, useEffect, CSSProperties} from 'react';
import {Icon, layerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { LocationType, OfferCoordinatesType } from '../../types/types';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import { getIconObject } from '../../helper';

export type MapProps = {
  location: LocationType;
  offers: OfferCoordinatesType [];
  selectedOfferId: string;
  classAdded: string;
  mapStyle?: CSSProperties;
}

const defaultCustomIcon = new Icon(getIconObject(URL_MARKER_DEFAULT));
const currentCustomIcon = new Icon(getIconObject(URL_MARKER_CURRENT));

export function Map({location, offers, selectedOfferId, classAdded, mapStyle}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.latitude,
          lng: offer.longitude
        });

        marker
          .setIcon(
            selectedOfferId !== '' && offer.id === selectedOfferId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOfferId]);

  return (
    <section
      className={classAdded}
      ref={mapRef}
      style={mapStyle}
    />
  );
}
