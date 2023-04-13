import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { setupStore } from './store/store';

describe('App', () => {
  const store = setupStore();
  test('Renders headline for main page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent(/gallery/i);
  });
  test('Renders headline for about page', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/about-us']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent(/about us/i);
  });
  test('Renders not found if invalid path', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/this-route-not-exist']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent(/404/i);
  });
  test('Renders form if invalid path', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/form']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent(/form/i);
  });
});
