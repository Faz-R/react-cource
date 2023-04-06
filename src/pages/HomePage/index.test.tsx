import { render, screen, waitFor } from '@testing-library/react';
import { describe, test } from 'vitest';
import userEvent from '@testing-library/user-event';
import SearchPage from '.';
import { BrowserRouter } from 'react-router-dom';

describe('The presence of a loader at the time of the request', async () => {
  test('', async () => {
    render(<SearchPage />, { wrapper: BrowserRouter });
    userEvent.type(screen.getByRole('searchbox'), 'Mone');
    userEvent.click(screen.getByText(/Search/i));
    expect(await screen.findByTestId('loader')).toBeInTheDocument;
  });
  test('Use field search to find picture', async () => {
    render(<SearchPage />, { wrapper: BrowserRouter });
    userEvent.type(screen.getByRole('searchbox'), 'Mone');
    userEvent.click(screen.getByText(/Search/i));
    waitFor(() => expect(screen.findByTestId('loader')).not.toBeInTheDocument)
      .then(() => {
        expect(screen.findAllByRole('listitem')).toBeInTheDocument;
      })
      .catch((err) => console.log(err));
  });
});
