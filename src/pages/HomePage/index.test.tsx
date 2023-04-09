import { render, screen } from '@testing-library/react';
import { describe, test, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import HomePage from '.';
import { BrowserRouter } from 'react-router-dom';
import { CARDS_ARRAY } from './constant';
import { ICard } from '../../components/card/interface';

describe('HomePage', async () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });
  afterEach(() => {
    vi.clearAllMocks();
  });
  test('The presence of a loader at the time of the request', async () => {
    render(<HomePage />, { wrapper: BrowserRouter });
    userEvent.type(screen.getByRole('searchbox'), 'Mone');
    userEvent.click(screen.getByText(/Search/i));
    expect(await screen.findByTestId('loader')).toBeInTheDocument;
  });
  test('Use field search to find picture', async () => {
    const mockData = {
      data: CARDS_ARRAY,
    };
    (
      global as unknown as {
        [x: string]: unknown;
        json: () => Promise<{ data: ICard }>;
      }
    ).fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      })
    );
    render(<HomePage />, { wrapper: BrowserRouter });
    userEvent.type(screen.getByRole('searchbox'), 'Mone');
    userEvent.click(screen.getByText(/Search/i));
    expect(await screen.findAllByTestId('picture-card')).toHaveLength(10);
  });
});
