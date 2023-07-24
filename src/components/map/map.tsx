import {Icon, layerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useRef, useEffect} from 'react';
import useMap from '../../hooks/use-map';
import { LocationType, OffersType } from '../../types/types';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import { getIconObject } from '../../helper';

type MapProps = {
  location: LocationType;
  offers: OffersType;
  selectedOfferId: string;
}

const defaultCustomIcon = new Icon(getIconObject(URL_MARKER_DEFAULT));
const currentCustomIcon = new Icon(getIconObject(URL_MARKER_CURRENT));

export default function Map({location, offers, selectedOfferId}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            selectedOfferId !== undefined && offer.id === selectedOfferId
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
      className="cities__map map"
      ref={mapRef}
    >
    </section>
  );
}
