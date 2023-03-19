import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import CardsList from '.';
import { CARDS_QUANTITY } from '../../utils/getCards';

describe('CardsList', () => {
  it('Renders cardslist', async () => {
    render(<CardsList />);
    expect(await screen.findByRole('list')).toBeInTheDocument();
    expect(await screen.findAllByRole('listitem')).toHaveLength(CARDS_QUANTITY);
  });
});
