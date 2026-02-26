import { render, screen, fireEvent } from '@testing-library/react';
import { AddToCartButton } from './AddToCartButton';

const mockItem = {
  id: 'mi1',
  restaurantId: 'r1',
  categoryId: 'mc1',
  categoryName: 'Mains',
  name: 'Pasta Carbonara',
  description: 'Classic Italian pasta',
  price: 1699,
  imageUrl: '/pasta.jpg',
  isPopular: true,
  tags: ['Best Seller'],
};

describe('<AddToCartButton />', () => {
  it('renders the price formatted from cents', () => {
    render(<AddToCartButton item={mockItem} onClick={jest.fn()} />);

    expect(screen.getByText('$16.99')).toBeInTheDocument();
  });

  it('renders a plus icon via an svg element', () => {
    const { container } = render(<AddToCartButton item={mockItem} onClick={jest.fn()} />);

    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('calls onClick when the button is clicked', () => {
    const onClick = jest.fn();
    render(<AddToCartButton item={mockItem} onClick={onClick} />);

    fireEvent.click(screen.getByRole('button'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('stops event propagation when clicked', () => {
    const onClick = jest.fn();
    const parentClick = jest.fn();

    render(
      <div onClick={parentClick}>
        <AddToCartButton item={mockItem} onClick={onClick} />
      </div>
    );

    fireEvent.click(screen.getByRole('button'));

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(parentClick).not.toHaveBeenCalled();
  });
});
