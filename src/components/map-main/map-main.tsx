import { Map, MapProps } from '../map/map';
import { AppPath, MapDesign } from '../../const';

type MapMainOmitType = 'mapStyle' | 'classAdded';

type MapMainProps = Omit<MapProps, MapMainOmitType >

export default function MapMain(props: MapMainProps): JSX.Element {
  return (
    <Map classAdded= {MapDesign[AppPath.Main].classAdded} {...props}/>
  );

}
