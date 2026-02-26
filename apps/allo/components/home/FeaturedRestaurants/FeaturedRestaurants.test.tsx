import { render, screen } from '@testing-library/react';
import { FeaturedRestaurants } from './FeaturedRestaurants';
import { useRestaurants } from '../../../hooks/use-restaurants/use-restaurants';

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

jest.mock('../../../hooks/use-restaurants/use-restaurants', () => ({
  useRestaurants: jest.fn(),
}));

const mockRestaurants = [
  {
    id: 'r1',
    slug: 'bella-napoli',
    name: 'Bella Napoli',
    description: 'Authentic Italian',
    cuisineType: ['italian'],
    imageUrl: '/bella.jpg',
    coverImageUrl: '/bella-cover.jpg',
    rating: 4.8,
    reviewCount: 200,
    deliveryTime: '20-30 min',
    deliveryFee: 0,
    minimumOrder: 1500,
    isOpen: true,
    isFeatured: true,
    tags: ['Pasta', 'Pizza'],
    address: '123 Main St',
  },
  {
    id: 'r2',
    slug: 'sushi-zen',
    name: 'Sushi Zen',
    description: 'Premium Japanese',
    cuisineType: ['japanese'],
    imageUrl: '/sushi.jpg',
    coverImageUrl: '/sushi-cover.jpg',
    rating: 4.9,
    reviewCount: 150,
    deliveryTime: '25-40 min',
    deliveryFee: 199,
    minimumOrder: 2000,
    isOpen: true,
    isFeatured: true,
    tags: ['Sushi', 'Ramen'],
    address: '456 Oak Ave',
  },
];

describe('<FeaturedRestaurants />', () => {
  it('renders the heading "Featured restaurants"', () => {
    (useRestaurants as jest.Mock).mockReturnValue({
      data: { data: [] },
      isLoading: false,
    });

    render(<FeaturedRestaurants />);

    expect(screen.getByText('Featured restaurants')).toBeInTheDocument();
  });

  it('renders restaurant cards when data is loaded', () => {
    (useRestaurants as jest.Mock).mockReturnValue({
      data: { data: mockRestaurants },
      isLoading: false,
    });

    render(<FeaturedRestaurants />);

    expect(screen.getByText('Bella Napoli')).toBeInTheDocument();
    expect(screen.getByText('Sushi Zen')).toBeInTheDocument();
  });

  it('renders the "View all" link', () => {
    (useRestaurants as jest.Mock).mockReturnValue({
      data: { data: [] },
      isLoading: false,
    });

    render(<FeaturedRestaurants />);

    expect(
      screen.getByRole('button', { name: /View all restaurants/i })
    ).toBeInTheDocument();
  });

  it('renders skeletons when loading', () => {
    (useRestaurants as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: true,
    });

    const { container } = render(<FeaturedRestaurants />);

    const skeletons = container.querySelectorAll('[class*="rounded-xl"]');
    expect(skeletons.length).toBeGreaterThan(0);
  });
});
