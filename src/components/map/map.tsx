import classnames from 'classnames';
import {useRef, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import {Icon, layerGroup, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { LocationType, OfferCoordinatesType, MapPageType } from '../../types/types';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT, MapDesign, AppPath } from '../../const';
import { getIconObject, validateOfferPage } from '../../helper';

export type MapProps = {
  location: LocationType;
  offers: OfferCoordinatesType [];
  selectedOfferId: string;
}

const defaultCustomIcon = new Icon(getIconObject(URL_MARKER_DEFAULT));
const currentCustomIcon = new Icon(getIconObject(URL_MARKER_CURRENT));

export default function Map({location, offers, selectedOfferId}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);
  const page = useLocation().pathname as MapPageType;
  const isOfferPage = validateOfferPage(page);
  const classAdded = classnames({'cities__map map': !isOfferPage, 'offer__map map': isOfferPage});
  const mapStyle = isOfferPage ? MapDesign[AppPath.Offer].style : {};

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
