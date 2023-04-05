import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import userEvent from '@testing-library/user-event';
import Search from '.';

describe('Search', () => {
  it('Renders empty input search element', () => {
    render(<Search getSearchString={(): void => {}} />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(screen.getByRole('searchbox')).toBeEmptyDOMElement();
  });

  it('Input search field is work', async () => {
    render(<Search getSearchString={(): void => {}} />);
    await userEvent.type(screen.getByRole('searchbox'), 'React');
    expect(screen.getByRole('searchbox')).toHaveValue('React');
  });
});
