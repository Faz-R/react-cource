import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  test('Renders headline for main page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent(/gallery/i);
  });
  test('Renders headline for about page', () => {
    render(
      <MemoryRouter initialEntries={['/about-us']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent(/about us/i);
  });
  test('Renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/this-route-not-exist']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent(/404/i);
  });
  test('Renders form if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/form']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent(/form/i);
  });
});
