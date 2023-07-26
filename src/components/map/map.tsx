import {useRef, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import {Icon, layerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { LocationType, OfferCoordinatesType, MapPageType } from '../../types/types';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT, MapDesign } from '../../const';
import { getIconObject } from '../../helper';

type MapProps = {
  location: LocationType;
  offers: OfferCoordinatesType [];
  selectedOfferId: string;
}

const getLocation = (page: MapPageType): MapPageType =>
  RegExp('/offer/.*').test(page)
    ? '/offer/:id'
    : page;

const defaultCustomIcon = new Icon(getIconObject(URL_MARKER_DEFAULT));
const currentCustomIcon = new Icon(getIconObject(URL_MARKER_CURRENT));

export default function Map({location, offers, selectedOfferId}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);
  const page = useLocation().pathname as MapPageType;
  const path = getLocation(page);
  const classAdded = MapDesign[path].classAdded;


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
    />
  );
}
