import { render, screen, fireEvent } from '@testing-library/react';
import { MenuCategory } from './MenuCategory';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

const mockItems = [
  {
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
  },
  {
    id: 'mi2',
    restaurantId: 'r1',
    categoryId: 'mc1',
    categoryName: 'Mains',
    name: 'Margherita Pizza',
    description: 'Fresh tomato and mozzarella',
    price: 1299,
    imageUrl: '/pizza.jpg',
    isPopular: false,
    tags: [],
  },
];

describe('<MenuCategory />', () => {
  it('renders the category name as a heading', () => {
    render(<MenuCategory name="Mains" items={mockItems} onItemClick={jest.fn()} />);

    expect(screen.getByRole('heading', { name: 'Mains' })).toBeInTheDocument();
  });

  it('renders all menu items', () => {
    render(<MenuCategory name="Mains" items={mockItems} onItemClick={jest.fn()} />);

    expect(screen.getByText('Pasta Carbonara')).toBeInTheDocument();
    expect(screen.getByText('Margherita Pizza')).toBeInTheDocument();
  });

  it('returns null when items array is empty', () => {
    const { container } = render(
      <MenuCategory name="Mains" items={[]} onItemClick={jest.fn()} />
    );

    expect(container.innerHTML).toBe('');
  });

  it('calls onItemClick with the correct item when a menu item is clicked', () => {
    const onItemClick = jest.fn();
    render(<MenuCategory name="Mains" items={mockItems} onItemClick={onItemClick} />);

    fireEvent.click(screen.getByText('Pasta Carbonara'));

    expect(onItemClick).toHaveBeenCalledWith(mockItems[0]);
  });
});
