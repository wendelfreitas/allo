import { render, screen } from '@testing-library/react';
import { RestaurantHeader } from './RestaurantHeader';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, className }: any) => <img src={src} alt={alt} className={className} />,
}));

const mockRestaurant = {
  id: 'r1',
  slug: 'test',
  name: 'Test Restaurant',
  description: 'Great food',
  cuisineType: ['italian'],
  imageUrl: '/test.jpg',
  coverImageUrl: '/cover.jpg',
  rating: 4.5,
  reviewCount: 100,
  deliveryTime: '25-35 min',
  deliveryFee: 299,
  minimumOrder: 1500,
  isOpen: true,
  isFeatured: false,
  tags: ['Organic', 'Family-Friendly'],
  address: '123 Test St',
  menuCategories: [{ id: 'mc1', name: 'Mains', sortOrder: 1 }],
  menuItems: [
    {
      id: 'mi1',
      restaurantId: 'r1',
      categoryId: 'mc1',
      categoryName: 'Mains',
      name: 'Pasta',
      description: 'Fresh pasta',
      price: 1499,
      imageUrl: '/pasta.jpg',
      isPopular: true,
      tags: ['Best Seller'],
    },
  ],
};

describe('<RestaurantHeader />', () => {
  it('renders the restaurant name as a heading', () => {
    render(<RestaurantHeader restaurant={mockRestaurant} />);

    expect(screen.getByRole('heading', { name: 'Test Restaurant' })).toBeInTheDocument();
  });

  it('renders the restaurant description', () => {
    render(<RestaurantHeader restaurant={mockRestaurant} />);

    expect(screen.getByText('Great food')).toBeInTheDocument();
  });

  it('renders the rating value', () => {
    render(<RestaurantHeader restaurant={mockRestaurant} />);

    expect(screen.getByText('4.5')).toBeInTheDocument();
  });

  it('renders the review count', () => {
    render(<RestaurantHeader restaurant={mockRestaurant} />);

    expect(screen.getByText('(100)')).toBeInTheDocument();
  });

  it('renders the delivery time', () => {
    render(<RestaurantHeader restaurant={mockRestaurant} />);

    expect(screen.getByText('25-35 min')).toBeInTheDocument();
  });

  it('renders the delivery fee as formatted price', () => {
    render(<RestaurantHeader restaurant={mockRestaurant} />);

    expect(screen.getByText('$2.99')).toBeInTheDocument();
  });

  it('renders the address', () => {
    render(<RestaurantHeader restaurant={mockRestaurant} />);

    expect(screen.getByText('123 Test St')).toBeInTheDocument();
  });

  it('renders all tags', () => {
    render(<RestaurantHeader restaurant={mockRestaurant} />);

    expect(screen.getByText('Organic')).toBeInTheDocument();
    expect(screen.getByText('Family-Friendly')).toBeInTheDocument();
  });

  it('shows Closed badge when restaurant is not open', () => {
    const closedRestaurant = { ...mockRestaurant, isOpen: false };
    render(<RestaurantHeader restaurant={closedRestaurant} />);

    expect(screen.getByText('Closed')).toBeInTheDocument();
  });

  it('does not show Closed badge when restaurant is open', () => {
    render(<RestaurantHeader restaurant={mockRestaurant} />);

    expect(screen.queryByText('Closed')).not.toBeInTheDocument();
  });
});
