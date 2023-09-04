import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import HistoryRouter from './components/history-router/history-router';
import browserHistory from './browser-history';
import App from './components/app/app';
import ErrorMessage from './components/error-message/error-message';
import { store } from './store/store';
import { updateAuthStatusAction } from './store/api-actions';


store.dispatch(updateAuthStatusAction());
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ErrorMessage />
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
