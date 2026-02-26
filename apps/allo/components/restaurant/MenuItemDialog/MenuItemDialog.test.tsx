import { render, screen, fireEvent } from '@testing-library/react';
import { MenuItemDialog } from './MenuItemDialog';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

jest.mock('@allo/ui', () => ({
  Dialog: ({ children, open }: any) => (open ? <div>{children}</div> : null),
  DialogContent: ({ children }: any) => <div>{children}</div>,
  DialogHeader: ({ children }: any) => <div>{children}</div>,
  DialogTitle: ({ children }: any) => <h2>{children}</h2>,
  DialogDescription: ({ children }: any) => <p>{children}</p>,
  Badge: ({ children }: any) => <span>{children}</span>,
  Button: ({ children, onClick, ...props }: any) => (
    <button onClick={onClick} {...props}>{children}</button>
  ),
}));

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
  tags: ['Best Seller', 'Chef Special'],
};

describe('<MenuItemDialog />', () => {
  it('renders item name when dialog is open', () => {
    render(
      <MenuItemDialog
        item={mockItem}
        open={true}
        onClose={jest.fn()}
        onAddToCart={jest.fn()}
      />
    );

    expect(screen.getByText('Pasta Carbonara')).toBeInTheDocument();
  });

  it('renders item description when dialog is open', () => {
    render(
      <MenuItemDialog
        item={mockItem}
        open={true}
        onClose={jest.fn()}
        onAddToCart={jest.fn()}
      />
    );

    expect(screen.getByText('Classic Italian pasta')).toBeInTheDocument();
  });

  it('renders the formatted price when dialog is open', () => {
    render(
      <MenuItemDialog
        item={mockItem}
        open={true}
        onClose={jest.fn()}
        onAddToCart={jest.fn()}
      />
    );

    const priceElements = screen.getAllByText('$16.99');
    expect(priceElements.length).toBeGreaterThanOrEqual(1);
  });

  it('renders nothing when dialog is not open', () => {
    render(
      <MenuItemDialog
        item={mockItem}
        open={false}
        onClose={jest.fn()}
        onAddToCart={jest.fn()}
      />
    );

    expect(screen.queryByText('Pasta Carbonara')).not.toBeInTheDocument();
  });

  it('renders nothing when item is null', () => {
    const { container } = render(
      <MenuItemDialog
        item={null}
        open={true}
        onClose={jest.fn()}
        onAddToCart={jest.fn()}
      />
    );

    expect(container.innerHTML).toBe('');
  });

  it('renders item tags', () => {
    render(
      <MenuItemDialog
        item={mockItem}
        open={true}
        onClose={jest.fn()}
        onAddToCart={jest.fn()}
      />
    );

    expect(screen.getByText('Best Seller')).toBeInTheDocument();
    expect(screen.getByText('Chef Special')).toBeInTheDocument();
  });

  it('calls onAddToCart with item and quantity when add button is clicked', () => {
    const onAddToCart = jest.fn();
    const onClose = jest.fn();
    render(
      <MenuItemDialog
        item={mockItem}
        open={true}
        onClose={onClose}
        onAddToCart={onAddToCart}
      />
    );

    const addButton = screen.getByRole('button', { name: /add to cart/i });
    fireEvent.click(addButton);

    expect(onAddToCart).toHaveBeenCalledWith(mockItem, 1);
    expect(onClose).toHaveBeenCalled();
  });
});
