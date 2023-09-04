import { render, renderHook } from '@testing-library/react';
import { useRef } from 'react';
import useMap from './use-map';
import { makeFakeOffersList } from '../utils/mocks';

describe('Hook: useMap', () => {
  const getMapRef = () => {
    const {result} = renderHook(() => useRef(null));
    return result.current;
  };
  const mapRef = getMapRef();
  const MapElement = () => <div ref={mapRef}></div>;
  const mockOffer = makeFakeOffersList()[0];

  render(<MapElement/>);

  it('should return map instance', () => {
    const {result} = renderHook(() => useMap(mapRef, mockOffer.city.name));

    expect(typeof result.current).toBe('object');
  });
});
