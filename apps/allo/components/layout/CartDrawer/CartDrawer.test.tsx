import { render, screen } from '@testing-library/react';
import { CartDrawer } from './CartDrawer';

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: any) => <a href={href}>{children}</a>,
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

const mockCloseCart = jest.fn();

jest.mock('../../../store/cart', () => ({
  useCartStore: (selector: any) => {
    const state = {
      isOpen: true,
      items: [],
      closeCart: mockCloseCart,
      restaurantName: null,
    };
    return selector(state);
  },
}));

jest.mock('../../cart/CartItem/CartItem', () => ({
  CartItem: ({ item }: any) => <div data-testid="cart-item">{item.id}</div>,
}));

jest.mock('../../cart/CartSummary/CartSummary', () => ({
  CartSummary: () => <div data-testid="cart-summary">Cart Summary</div>,
}));

jest.mock('../../cart/EmptyCart/EmptyCart', () => ({
  EmptyCart: () => <div data-testid="empty-cart">Your cart is empty</div>,
}));

describe('<CartDrawer />', () => {
  beforeEach(() => {
    mockCloseCart.mockClear();
  });

  it('should render the "Your Order" title', () => {
    render(<CartDrawer />);

    expect(screen.getByText('Your Order')).toBeInTheDocument();
  });

  it('should render the empty cart component when items array is empty', () => {
    render(<CartDrawer />);

    expect(screen.getByTestId('empty-cart')).toBeInTheDocument();
    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
  });

  it('should not render checkout button when cart is empty', () => {
    render(<CartDrawer />);

    expect(screen.queryByText('Proceed to Checkout')).not.toBeInTheDocument();
  });

  it('should not show restaurant name when restaurantName is null', () => {
    render(<CartDrawer />);

    expect(screen.queryByText(/^from /)).not.toBeInTheDocument();
  });
});
