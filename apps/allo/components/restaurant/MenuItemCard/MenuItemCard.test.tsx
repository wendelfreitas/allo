import { render, screen, fireEvent } from '@testing-library/react';
import { MenuItemCard } from './MenuItemCard';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, className }: any) => <img src={src} alt={alt} className={className} />,
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

describe('<MenuItemCard />', () => {
  it('renders the item name', () => {
    render(<MenuItemCard item={mockItem} onClick={jest.fn()} />);

    expect(screen.getByText('Pasta Carbonara')).toBeInTheDocument();
  });

  it('renders the item description', () => {
    render(<MenuItemCard item={mockItem} onClick={jest.fn()} />);

    expect(screen.getByText('Classic Italian pasta')).toBeInTheDocument();
  });

  it('renders the price formatted from cents', () => {
    render(<MenuItemCard item={mockItem} onClick={jest.fn()} />);

    expect(screen.getByText('$16.99')).toBeInTheDocument();
  });

  it('renders the Popular badge when item is popular', () => {
    render(<MenuItemCard item={mockItem} onClick={jest.fn()} />);

    expect(screen.getByText('Popular')).toBeInTheDocument();
  });

  it('does not render the Popular badge when item is not popular', () => {
    const nonPopularItem = { ...mockItem, isPopular: false };
    render(<MenuItemCard item={nonPopularItem} onClick={jest.fn()} />);

    expect(screen.queryByText('Popular')).not.toBeInTheDocument();
  });

  it('renders tags', () => {
    render(<MenuItemCard item={mockItem} onClick={jest.fn()} />);

    expect(screen.getByText('Best Seller')).toBeInTheDocument();
    expect(screen.getByText('Chef Special')).toBeInTheDocument();
  });

  it('calls onClick when the card is clicked', () => {
    const onClick = jest.fn();
    render(<MenuItemCard item={mockItem} onClick={onClick} />);

    fireEvent.click(screen.getByText('Pasta Carbonara'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('does not render tags section when tags array is empty', () => {
    const noTagsItem = { ...mockItem, tags: [] };
    render(<MenuItemCard item={noTagsItem} onClick={jest.fn()} />);

    expect(screen.queryByText('Best Seller')).not.toBeInTheDocument();
    expect(screen.queryByText('Chef Special')).not.toBeInTheDocument();
  });
});
