import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';
import userEvent from '@testing-library/user-event';
import SearchPage from '.';
import { BrowserRouter } from 'react-router-dom';

describe('FormPage', () => {
  test('Use field search to find picture', async () => {
    render(<SearchPage />, { wrapper: BrowserRouter });
    localStorage.setItem('search', '');
    await userEvent.type(screen.getByRole('searchbox'), 'Mone');
    await userEvent.click(screen.getByText(/Search/i));
    const cardsArray = await screen.findAllByRole('listitem');
    expect(cardsArray).toHaveLength(10);
  });
});
