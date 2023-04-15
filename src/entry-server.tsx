import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

const store = setupStore();

export function render() {
  const html = ReactDOMServer.renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
  return { html };
}
