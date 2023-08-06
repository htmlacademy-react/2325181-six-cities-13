import { CircleLoader } from 'react-spinners';
import { containerStyle, spinnerCSSOverride, spinnerSize, spinnerColor, loadingStyle} from '../../const';

export default function LoadingPage(): JSX.Element {

  return (
    <div className="page page--gray page--main">
      <main>
        <div style={containerStyle}>
          <CircleLoader
            cssOverride={spinnerCSSOverride}
            size={spinnerSize}
            color={spinnerColor}
          />
          <div style={loadingStyle}>Loading...</div>
        </div>
      </main>
    </div>
  );
}
