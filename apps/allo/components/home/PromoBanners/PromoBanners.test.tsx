import { render, screen } from '@testing-library/react';
import { PromoBanners } from './PromoBanners';
import { usePromotions } from '../../../hooks/use-promotions/use-promotions';

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

jest.mock('../../../hooks/use-promotions/use-promotions', () => ({
  usePromotions: jest.fn(),
}));

const mockPromotions = [
  {
    id: 'p1',
    title: 'Free Delivery Weekend',
    description: 'Enjoy free delivery on all orders this weekend.',
    imageUrl: '/promo1.jpg',
    badge: 'Limited Time',
    ctaText: 'Order Now',
    backgroundColor: '#FF6B55',
  },
  {
    id: 'p2',
    title: '20% Off First Order',
    description: 'New customers get 20% off their first order.',
    imageUrl: '/promo2.jpg',
    badge: 'New User',
    ctaText: 'Get Started',
    backgroundColor: '#4CAF50',
  },
];

describe('<PromoBanners />', () => {
  it('renders the heading "Special offers for you"', () => {
    (usePromotions as jest.Mock).mockReturnValue({
      data: mockPromotions,
      isLoading: false,
    });

    render(<PromoBanners />);

    expect(screen.getByText('Special offers for you')).toBeInTheDocument();
  });

  it('renders promotion titles', () => {
    (usePromotions as jest.Mock).mockReturnValue({
      data: mockPromotions,
      isLoading: false,
    });

    render(<PromoBanners />);

    expect(screen.getByText('Free Delivery Weekend')).toBeInTheDocument();
    expect(screen.getByText('20% Off First Order')).toBeInTheDocument();
  });

  it('renders promotion badges', () => {
    (usePromotions as jest.Mock).mockReturnValue({
      data: mockPromotions,
      isLoading: false,
    });

    render(<PromoBanners />);

    expect(screen.getByText('Limited Time')).toBeInTheDocument();
    expect(screen.getByText('New User')).toBeInTheDocument();
  });

  it('renders promotion CTA buttons', () => {
    (usePromotions as jest.Mock).mockReturnValue({
      data: mockPromotions,
      isLoading: false,
    });

    render(<PromoBanners />);

    expect(
      screen.getByRole('button', { name: 'Order Now' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Get Started' })
    ).toBeInTheDocument();
  });

  it('renders skeletons when loading', () => {
    (usePromotions as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: true,
    });

    const { container } = render(<PromoBanners />);

    const skeletons = container.querySelectorAll('[class*="rounded-2xl"]');
    expect(skeletons.length).toBeGreaterThan(0);
  });
});
