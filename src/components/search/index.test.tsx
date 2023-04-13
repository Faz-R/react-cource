import { render, screen } from '@testing-library/react';
import { describe, test } from 'vitest';
import userEvent from '@testing-library/user-event';
import Search from '.';
import { Provider } from 'react-redux';
import { setupStore } from '../../store/store';

describe('Search', () => {
  const store = setupStore();
  test('Renders empty input search element', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(screen.getByRole('searchbox')).toBeEmptyDOMElement();
  });

  test('Input search field is work', async () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    await userEvent.type(screen.getByRole('searchbox'), 'React');
    expect(screen.getByRole('searchbox')).toHaveValue('React');
  });
});
