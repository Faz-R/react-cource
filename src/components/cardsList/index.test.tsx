import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import CardsList from '.';
import { CARDS_ARRAY } from '../../constant/cardsArray';

describe('CardsList', () => {
  it('Renders cardslist', async () => {
    render(<CardsList cards={CARDS_ARRAY} showCard={() => {}} getCard={() => {}} />);
    expect(await screen.findByRole('list')).toBeInTheDocument();
    expect(await screen.findAllByRole('listitem')).toHaveLength(3);
  });
});
