import { render, screen } from '@testing-library/react';
import { OrderDetails } from './OrderDetails';

const mockOrder = {
  id: 'ORD-123',
  restaurantId: 'r1',
  restaurantName: 'Test Restaurant',
  items: [
    { name: 'Pasta', quantity: 2, price: 1499 },
    { name: 'Salad', quantity: 1, price: 899 },
  ],
  subtotal: 3897,
  deliveryFee: 299,
  total: 4196,
  status: 'preparing' as const,
  statusHistory: [
    { status: 'confirmed' as const, timestamp: '2024-01-01T00:00:00Z' },
  ],
  deliveryAddress: '123 Main St',
  paymentMethod: 'card',
  estimatedDelivery: '2024-01-01T01:00:00Z',
  createdAt: '2024-01-01T00:00:00Z',
};

describe('<OrderDetails />', () => {
  it('renders the Order Details heading', () => {
    render(<OrderDetails order={mockOrder} />);

    expect(
      screen.getByRole('heading', { name: 'Order Details' })
    ).toBeInTheDocument();
  });

  it('renders the restaurant name', () => {
    render(<OrderDetails order={mockOrder} />);

    expect(screen.getByText('Test Restaurant')).toBeInTheDocument();
  });

  it('renders the delivery address', () => {
    render(<OrderDetails order={mockOrder} />);

    expect(screen.getByText('123 Main St')).toBeInTheDocument();
  });

  it('renders the payment method as Credit Card when value is card', () => {
    render(<OrderDetails order={mockOrder} />);

    expect(screen.getByText('Credit Card')).toBeInTheDocument();
  });

  it('renders items with quantities', () => {
    render(<OrderDetails order={mockOrder} />);

    expect(screen.getByText('2x Pasta')).toBeInTheDocument();
    expect(screen.getByText('1x Salad')).toBeInTheDocument();
  });

  it('renders the items section heading', () => {
    render(<OrderDetails order={mockOrder} />);

    expect(screen.getByText('Items')).toBeInTheDocument();
  });

  it('renders item prices multiplied by quantity', () => {
    render(<OrderDetails order={mockOrder} />);

    expect(screen.getByText('$29.98')).toBeInTheDocument();
    expect(screen.getByText('$8.99')).toBeInTheDocument();
  });

  it('renders the subtotal', () => {
    render(<OrderDetails order={mockOrder} />);

    expect(screen.getByText('Subtotal')).toBeInTheDocument();
    expect(screen.getByText('$38.97')).toBeInTheDocument();
  });

  it('renders the delivery fee', () => {
    render(<OrderDetails order={mockOrder} />);

    expect(screen.getByText('Delivery fee')).toBeInTheDocument();
    expect(screen.getByText('$2.99')).toBeInTheDocument();
  });

  it('renders the total', () => {
    render(<OrderDetails order={mockOrder} />);

    expect(screen.getByText('Total')).toBeInTheDocument();
    expect(screen.getByText('$41.96')).toBeInTheDocument();
  });

  it('renders PIX when payment method is pix', () => {
    const pixOrder = { ...mockOrder, paymentMethod: 'pix' };
    render(<OrderDetails order={pixOrder} />);

    expect(screen.getByText('PIX')).toBeInTheDocument();
  });

  it('renders Cash on Delivery when payment method is cash', () => {
    const cashOrder = { ...mockOrder, paymentMethod: 'cash' };
    render(<OrderDetails order={cashOrder} />);

    expect(screen.getByText('Cash on Delivery')).toBeInTheDocument();
  });
});
