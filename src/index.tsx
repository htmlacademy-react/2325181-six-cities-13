import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { store } from './store';
import ErrorMessage from './components/error-message/error-message';
import { loadOffersAction, updateAuthStatusAction, loadFavoritesAction } from './store/api-actions';

store.dispatch(loadOffersAction());
store.dispatch(updateAuthStatusAction());
store.dispatch(loadFavoritesAction());
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App />
    </Provider>
  </React.StrictMode>
);
