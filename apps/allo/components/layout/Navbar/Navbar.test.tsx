import { render, screen, fireEvent } from '@testing-library/react';
import { Navbar } from './Navbar';

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: any) => <a href={href}>{children}</a>,
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, className }: any) => (
    <img src={src} alt={alt} className={className} />
  ),
}));

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() }),
  useSearchParams: () => new URLSearchParams(),
}));

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className }: any) => (
      <div className={className}>{children}</div>
    ),
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

const mockOpenCart = jest.fn();

jest.mock('../../../store/cart', () => ({
  useCartStore: (selector: any) => {
    const state = {
      getItemCount: () => 3,
      openCart: mockOpenCart,
    };
    return selector(state);
  },
}));

describe('<Navbar />', () => {
  beforeEach(() => {
    mockOpenCart.mockClear();
  });

  it('should render the logo with "allO"', () => {
    render(<Navbar />);

    expect(screen.getByText('all')).toBeInTheDocument();
    expect(screen.getByText('O')).toBeInTheDocument();
    expect(screen.getByText('eats', { exact: false })).toBeInTheDocument();
  });

  it('should render the cart icon button', () => {
    render(<Navbar />);

    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThanOrEqual(1);
  });

  it('should display the cart badge with item count', () => {
    render(<Navbar />);

    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('should call openCart when cart button is clicked', () => {
    render(<Navbar />);

    const cartBadge = screen.getByText('3');
    const cartButton = cartBadge.closest('button')!;
    fireEvent.click(cartButton);

    expect(mockOpenCart).toHaveBeenCalledTimes(1);
  });

  it('should render the mobile menu button', () => {
    render(<Navbar />);

    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThanOrEqual(2);
  });

  it('should toggle mobile nav when menu button is clicked', () => {
    render(<Navbar />);

    expect(screen.queryByText('Restaurants')).toBeInTheDocument();

    const buttons = screen.getAllByRole('button');
    const menuButton = buttons[buttons.length - 1]!;
    fireEvent.click(menuButton);

    const restaurantLinks = screen.getAllByText('Restaurants');
    expect(restaurantLinks.length).toBe(2);
  });
});
