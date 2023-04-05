import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Card from '.';
import { CARD_EXAMPLE } from '../../constant/card';

describe('Card', () => {
  it('Render card', async () => {
    render(<Card card={CARD_EXAMPLE} showCard={() => {}} getCard={() => {}} />);
    expect(screen.getByText(/Virgin and Child/i)).toBeInTheDocument();
    expect(screen.queryByText('category')).not.toBeInTheDocument();
  });
});
