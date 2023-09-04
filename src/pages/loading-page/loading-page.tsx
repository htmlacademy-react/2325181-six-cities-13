import { CircleLoader } from 'react-spinners';
import { CONTAINER_STYLE, SPINNER_CSS_OVERRIDE, SPINNER_SIZE, SPINNER_COLOR, LOADING_STYLE} from '../../const';

export default function LoadingPage(): JSX.Element {

  return (
    <div className="page page--gray page--main" data-testid='loading-page-element'>
      <main>
        <div style={CONTAINER_STYLE}>
          <CircleLoader
            cssOverride={SPINNER_CSS_OVERRIDE}
            size={SPINNER_SIZE}
            color={SPINNER_COLOR}
          />
          <div style={LOADING_STYLE}>Loading...</div>
        </div>
      </main>
    </div>
  );
}
