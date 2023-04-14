import { render, screen } from '@testing-library/react';
import { describe, test, vi, Mock } from 'vitest';
import userEvent from '@testing-library/user-event';
import HomePage from '.';
import { BrowserRouter } from 'react-router-dom';
import { CARDS_ARRAY } from './constant';
import { Provider } from 'react-redux';
import { setupStore } from '../../store/store';
import { useFetchItems } from '../../utils/useFetchItems';

vi.mock('../../utils/useFetchItems', () => ({
  useFetchItems: vi.fn(),
}));

const mockData = {
  data: CARDS_ARRAY,
};

describe('HomePage', async () => {
  const store = setupStore();
  beforeEach(() => {
    (useFetchItems as Mock).mockImplementation(() => mockData);
  });
  afterEach(() => {
    vi.clearAllMocks();
  });
  test('Use field search to find picture', async () => {
    render(
      <Provider store={store}>
        {' '}
        <HomePage />{' '}
      </Provider>,
      { wrapper: BrowserRouter }
    );
    userEvent.type(screen.getByRole('searchbox'), 'Mone');
    userEvent.click(screen.getByText(/Search/i));
    expect(await screen.findAllByTestId('picture-card')).toHaveLength(10);
  });
});
