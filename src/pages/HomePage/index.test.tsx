import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';
import userEvent from '@testing-library/user-event';
import SearchPage from '.';
import { BrowserRouter } from 'react-router-dom';

describe('FormPage', () => {
  test('Use field search to find picture', async () => {
    render(<SearchPage />, { wrapper: BrowserRouter });
    await userEvent.type(screen.getByRole('searchbox'), 'Mone');
    await userEvent.click(screen.getByText(/Search/i));
    expect(await screen.findAllByRole('listitem')).toHaveLength(10);
  });
});
