import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { PLACE_CARD_NUMBER } from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placeCardNumber={PLACE_CARD_NUMBER} />
  </React.StrictMode>
);
