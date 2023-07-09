import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  placeCardNumber: number;
}

export default function App ({placeCardNumber}: AppProps): JSX.Element {
  return (
    <MainPage placeCardNumber={placeCardNumber}/>
  );
}
