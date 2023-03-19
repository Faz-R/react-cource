import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Card from '.';

describe('Card', () => {
  const props = {
    id: 1,
    title: 'test',
    price: 20,
    description: 'description',
    category: 'category',
    image: 'image',
    rating: {
      rate: 5,
      count: 12,
    },
  };
  it('Render card', async () => {
    render(<Card card={props} />);
    expect(screen.getByText('test')).toBeInTheDocument();
    expect(screen.queryByText('category')).not.toBeInTheDocument();
  });
});
