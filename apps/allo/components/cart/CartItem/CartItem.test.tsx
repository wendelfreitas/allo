import { render, screen, fireEvent } from '@testing-library/react';
import { CartItem } from './CartItem';
import type { CartItem as CartItemType } from '../../../app/api/_data/types';

const mockUpdateQuantity = jest.fn();
const mockRemoveItem = jest.fn();

jest.mock('../../../store/cart', () => ({
  useCartStore: (selector: (state: Record<string, unknown>) => unknown) =>
    selector({
      updateQuantity: mockUpdateQuantity,
      removeItem: mockRemoveItem,
    }),
}));

const createCartItem = (overrides?: Partial<CartItemType>): CartItemType => ({
  id: 'cart-item-1',
  menuItem: {
    id: 'menu-1',
    restaurantId: 'r1',
    categoryId: 'cat-1',
    categoryName: 'Pizza',
    name: 'Margherita Pizza',
    description: 'Classic pizza with tomato and mozzarella',
    price: 1299,
    imageUrl: 'https://example.com/pizza.jpg',
    isPopular: true,
    tags: ['Classic'],
  },
  quantity: 2,
  totalPrice: 2598,
  ...overrides,
});

describe('<CartItem />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the item name', () => {
    render(<CartItem item={createCartItem()} />);

    expect(screen.getByText('Margherita Pizza')).toBeInTheDocument();
  });

  it('renders the unit price', () => {
    render(<CartItem item={createCartItem()} />);

    expect(screen.getByText('$12.99')).toBeInTheDocument();
  });

  it('renders the total price', () => {
    render(<CartItem item={createCartItem()} />);

    expect(screen.getByText('$25.98')).toBeInTheDocument();
  });

  it('renders the quantity', () => {
    render(<CartItem item={createCartItem()} />);

    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('calls updateQuantity when quantity selector is used', () => {
    render(<CartItem item={createCartItem()} />);

    const buttons = screen.getAllByRole('button');
    // The plus button in QuantitySelector (second button)
    const plusButton = buttons[1]!;
    fireEvent.click(plusButton);

    expect(mockUpdateQuantity).toHaveBeenCalledWith('cart-item-1', 3);
  });

  it('calls removeItem when the remove button is clicked', () => {
    render(<CartItem item={createCartItem()} />);

    const buttons = screen.getAllByRole('button');
    // The remove button is the last button (after minus, plus)
    const removeButton = buttons[buttons.length - 1]!;
    fireEvent.click(removeButton);

    expect(mockRemoveItem).toHaveBeenCalledWith('cart-item-1');
  });

  it('renders with different item data', () => {
    const item = createCartItem({
      id: 'cart-item-2',
      menuItem: {
        id: 'menu-2',
        restaurantId: 'r1',
        categoryId: 'cat-2',
        categoryName: 'Pasta',
        name: 'Spaghetti Carbonara',
        description: 'Creamy pasta with bacon',
        price: 1599,
        imageUrl: 'https://example.com/pasta.jpg',
        isPopular: false,
        tags: [],
      },
      quantity: 1,
      totalPrice: 1599,
    });

    render(<CartItem item={item} />);

    expect(screen.getByText('Spaghetti Carbonara')).toBeInTheDocument();
    // Both unit price and total are $15.99 when quantity is 1
    expect(screen.getAllByText('$15.99').length).toBeGreaterThanOrEqual(1);
  });
});
