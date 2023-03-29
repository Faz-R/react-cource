import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Card from '.';

describe('Card', () => {
  const props = {
    id: 1,
    title: 'test',
    description: 'description',
    price: 20,
    discountPercentage: 10,
    rating: 5,
    stock: 30,
    brand: 'brand',
    category: 'categiory',
    thumbnail: 'image',
    images: ['first', 'second', 'third'],
  };
  it('Render card', async () => {
    render(<Card card={props} />);
    expect(screen.getByText('test')).toBeInTheDocument();
    expect(screen.queryByText('category')).not.toBeInTheDocument();
  });
});
