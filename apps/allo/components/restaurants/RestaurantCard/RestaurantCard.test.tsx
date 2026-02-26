import { render, screen } from '@testing-library/react';
import { RestaurantCard } from './RestaurantCard';

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

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className }: any) => (
      <div className={className}>{children}</div>
    ),
  },
}));

const mockRestaurant = {
  id: 'r1',
  slug: 'test-restaurant',
  name: 'Test Restaurant',
  description: 'A test restaurant',
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
  tags: ['Wood-Fired', 'Organic'],
  address: '123 Test St',
};

describe('<RestaurantCard />', () => {
  it('renders the restaurant name', () => {
    render(<RestaurantCard restaurant={mockRestaurant} />);

    expect(screen.getByText('Test Restaurant')).toBeInTheDocument();
  });

  it('renders the restaurant rating', () => {
    render(<RestaurantCard restaurant={mockRestaurant} />);

    expect(screen.getByText('4.5')).toBeInTheDocument();
  });

  it('renders the delivery time', () => {
    render(<RestaurantCard restaurant={mockRestaurant} />);

    expect(screen.getByText('25-35 min')).toBeInTheDocument();
  });

  it('renders the restaurant tags', () => {
    render(<RestaurantCard restaurant={mockRestaurant} />);

    expect(screen.getByText('Wood-Fired')).toBeInTheDocument();
    expect(screen.getByText('Organic')).toBeInTheDocument();
  });

  it('renders the restaurant description', () => {
    render(<RestaurantCard restaurant={mockRestaurant} />);

    expect(screen.getByText('A test restaurant')).toBeInTheDocument();
  });

  it('links to the restaurant detail page', () => {
    render(<RestaurantCard restaurant={mockRestaurant} />);

    const link = screen.getByText('Test Restaurant').closest('a');
    expect(link).toHaveAttribute('href', '/restaurants/test-restaurant');
  });

  it('renders the delivery fee as a price', () => {
    render(<RestaurantCard restaurant={mockRestaurant} />);

    expect(screen.getByText('$2.99')).toBeInTheDocument();
  });

  it('renders "Closed" overlay when restaurant is not open', () => {
    render(
      <RestaurantCard restaurant={{ ...mockRestaurant, isOpen: false }} />
    );

    expect(screen.getByText('Closed')).toBeInTheDocument();
  });

  it('renders "Featured" badge when restaurant is featured', () => {
    render(
      <RestaurantCard restaurant={{ ...mockRestaurant, isFeatured: true }} />
    );

    expect(screen.getByText('Featured')).toBeInTheDocument();
  });

  it('renders "Free" when delivery fee is 0', () => {
    render(
      <RestaurantCard restaurant={{ ...mockRestaurant, deliveryFee: 0 }} />
    );

    expect(screen.getByText('Free')).toBeInTheDocument();
  });
});
