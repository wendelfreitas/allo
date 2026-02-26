import { render, screen } from '@testing-library/react';
import { RestaurantGrid } from './RestaurantGrid';

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: any) => <a href={href}>{children}</a>,
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
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
    isFeatured: false,
    tags: ['Sushi', 'Ramen'],
    address: '456 Oak Ave',
  },
];

describe('<RestaurantGrid />', () => {
  it('renders restaurant cards when given restaurants', () => {
    render(<RestaurantGrid restaurants={mockRestaurants} isLoading={false} />);

    expect(screen.getByText('Bella Napoli')).toBeInTheDocument();
    expect(screen.getByText('Sushi Zen')).toBeInTheDocument();
  });

  it('shows "No restaurants found" when restaurants array is empty', () => {
    render(<RestaurantGrid restaurants={[]} isLoading={false} />);

    expect(screen.getByText('No restaurants found')).toBeInTheDocument();
    expect(
      screen.getByText('Try adjusting your search or filters')
    ).toBeInTheDocument();
  });

  it('shows "No restaurants found" when restaurants is undefined', () => {
    render(<RestaurantGrid restaurants={undefined} isLoading={false} />);

    expect(screen.getByText('No restaurants found')).toBeInTheDocument();
  });

  it('shows skeletons when loading', () => {
    const { container } = render(
      <RestaurantGrid restaurants={undefined} isLoading={true} />
    );

    const skeletons = container.querySelectorAll('[class*="rounded-xl"]');
    expect(skeletons.length).toBeGreaterThan(0);
  });

  it('does not show restaurant cards when loading', () => {
    render(
      <RestaurantGrid restaurants={mockRestaurants} isLoading={true} />
    );

    expect(screen.queryByText('Bella Napoli')).not.toBeInTheDocument();
    expect(screen.queryByText('Sushi Zen')).not.toBeInTheDocument();
  });
});
