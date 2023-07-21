import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Offers } from './mocks/offers';
import { Reviews } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers={Offers} reviews={Reviews} />
  </React.StrictMode>
);
