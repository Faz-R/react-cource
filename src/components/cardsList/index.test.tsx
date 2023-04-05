import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import CardsList from '.';
import { CARD_EXAMPLE } from '../../utils/card';

describe('CardsList', () => {
  it('Renders cardslist', async () => {
    render(
      <CardsList
        cards={[CARD_EXAMPLE, CARD_EXAMPLE, CARD_EXAMPLE]}
        showCard={() => {}}
        getCard={() => {}}
      />
    );
    expect(await screen.findByRole('list')).toBeInTheDocument();
    expect(await screen.findAllByRole('listitem')).toHaveLength(3);
  });
});
