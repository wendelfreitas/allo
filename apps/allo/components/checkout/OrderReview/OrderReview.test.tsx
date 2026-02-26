import { render, screen } from '@testing-library/react';
import { OrderReview } from './OrderReview';
import { useCartStore } from '../../../store/cart';

jest.mock('../../../store/cart', () => ({
  useCartStore: jest.fn(),
}));

jest.mock('../../../app/api/_data/restaurants', () => ({
  restaurants: [{ id: 'r1', deliveryFee: 499 }],
}));

const mockUseCartStore = useCartStore as unknown as jest.Mock;

const mockCartItems = [
  {
    id: 'cart-1',
    menuItem: {
      id: 'mi1',
      restaurantId: 'r1',
      categoryId: 'mc1',
      categoryName: 'Mains',
      name: 'Pasta Carbonara',
      description: 'Classic Italian pasta',
      price: 1699,
      imageUrl: '/pasta.jpg',
      isPopular: true,
      tags: [],
    },
    quantity: 2,
    totalPrice: 3398,
  },
  {
    id: 'cart-2',
    menuItem: {
      id: 'mi2',
      restaurantId: 'r1',
      categoryId: 'mc1',
      categoryName: 'Mains',
      name: 'Margherita Pizza',
      description: 'Fresh pizza',
      price: 1299,
      imageUrl: '/pizza.jpg',
      isPopular: false,
      tags: [],
    },
    quantity: 1,
    totalPrice: 1299,
  },
];

describe('<OrderReview />', () => {
  beforeEach(() => {
    mockUseCartStore.mockImplementation((selector: any) => {
      const state = {
        items: mockCartItems,
        restaurantId: 'r1',
        restaurantName: 'Test Restaurant',
      };
      return selector(state);
    });
  });

  it('renders the Order Review heading', () => {
    render(<OrderReview />);

    expect(
      screen.getByRole('heading', { name: 'Order Review' })
    ).toBeInTheDocument();
  });

  it('renders the restaurant name', () => {
    render(<OrderReview />);

    expect(screen.getByText('From Test Restaurant')).toBeInTheDocument();
  });

  it('renders item names with quantities', () => {
    render(<OrderReview />);

    expect(screen.getByText('2x Pasta Carbonara')).toBeInTheDocument();
    expect(screen.getByText('1x Margherita Pizza')).toBeInTheDocument();
  });

  it('renders the subtotal', () => {
    render(<OrderReview />);

    expect(screen.getByText('Subtotal')).toBeInTheDocument();
    expect(screen.getByText('$46.97')).toBeInTheDocument();
  });

  it('renders the delivery fee', () => {
    render(<OrderReview />);

    expect(screen.getByText('Delivery fee')).toBeInTheDocument();
    expect(screen.getByText('$4.99')).toBeInTheDocument();
  });

  it('renders the total', () => {
    render(<OrderReview />);

    expect(screen.getByText('Total')).toBeInTheDocument();
    expect(screen.getByText('$51.96')).toBeInTheDocument();
  });
});
