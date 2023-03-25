import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import userEvent from '@testing-library/user-event';
import Search from '.';

describe('Search', () => {
  it('Renders empty input search element', () => {
    render(<Search />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(screen.getByRole('searchbox')).toBeEmptyDOMElement();
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('Input search field is work', async () => {
    render(<Search />);
    await userEvent.type(screen.getByRole('searchbox'), 'React');
    expect(screen.getByRole('searchbox')).toHaveValue('React');
  });
});
