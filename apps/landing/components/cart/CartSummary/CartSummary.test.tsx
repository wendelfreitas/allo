import { render, screen } from '@testing-library/react';
import { CartSummary } from './CartSummary';

jest.mock('../../../store/cart', () => ({
  useCartStore: (selector: (state: Record<string, unknown>) => unknown) =>
    selector({
      items: [
        { id: 'item-1', totalPrice: 1299 },
        { id: 'item-2', totalPrice: 1599 },
      ],
      restaurantId: 'r1',
    }),
}));

jest.mock('../../../app/api/_data/restaurants', () => ({
  restaurants: [
    {
      id: 'r1',
      slug: 'test-restaurant',
      name: 'Test Restaurant',
      description: 'A test restaurant',
      cuisineType: ['italian'],
      imageUrl: '',
      coverImageUrl: '',
      rating: 4.5,
      reviewCount: 100,
      deliveryTime: '25-35 min',
      deliveryFee: 299,
      minimumOrder: 1500,
      isOpen: true,
      isFeatured: false,
      tags: [],
      address: '123 Test St',
    },
  ],
}));

describe('<CartSummary />', () => {
  it('renders the subtotal', () => {
    render(<CartSummary />);

    expect(screen.getByText('$28.98')).toBeInTheDocument();
  });

  it('renders the subtotal label', () => {
    render(<CartSummary />);

    expect(screen.getByText('Subtotal')).toBeInTheDocument();
  });

  it('renders the delivery fee', () => {
    render(<CartSummary />);

    expect(screen.getByText('$2.99')).toBeInTheDocument();
  });

  it('renders the delivery fee label', () => {
    render(<CartSummary />);

    expect(screen.getByText('Delivery fee')).toBeInTheDocument();
  });

  it('renders the total', () => {
    render(<CartSummary />);

    expect(screen.getByText('$31.97')).toBeInTheDocument();
  });

  it('renders the total label', () => {
    render(<CartSummary />);

    expect(screen.getByText('Total')).toBeInTheDocument();
  });
});
