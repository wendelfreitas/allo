import { render, screen } from '@testing-library/react';
import { CategoryCarousel } from './CategoryCarousel';
import { useCategories } from '../../../hooks/use-categories/use-categories';

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: any) => <a href={href}>{children}</a>,
}));

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className }: any) => <div className={className}>{children}</div>,
  },
}));

jest.mock('../../../hooks/use-categories/use-categories', () => ({
  useCategories: jest.fn(),
}));

const mockCategories = [
  { id: 'c1', name: 'Italian', slug: 'italian', emoji: '🍕' },
  { id: 'c2', name: 'Japanese', slug: 'japanese', emoji: '🍣' },
  { id: 'c3', name: 'Mexican', slug: 'mexican', emoji: '🌮' },
];

describe('<CategoryCarousel />', () => {
  it('renders the heading "What are you craving?"', () => {
    (useCategories as jest.Mock).mockReturnValue({
      data: [],
      isLoading: false,
    });

    render(<CategoryCarousel />);

    expect(screen.getByText('What are you craving?')).toBeInTheDocument();
  });

  it('renders category names when data is loaded', () => {
    (useCategories as jest.Mock).mockReturnValue({
      data: mockCategories,
      isLoading: false,
    });

    render(<CategoryCarousel />);

    expect(screen.getByText('Italian')).toBeInTheDocument();
    expect(screen.getByText('Japanese')).toBeInTheDocument();
    expect(screen.getByText('Mexican')).toBeInTheDocument();
  });

  it('renders category emojis', () => {
    (useCategories as jest.Mock).mockReturnValue({
      data: mockCategories,
      isLoading: false,
    });

    render(<CategoryCarousel />);

    expect(screen.getByText('🍕')).toBeInTheDocument();
    expect(screen.getByText('🍣')).toBeInTheDocument();
    expect(screen.getByText('🌮')).toBeInTheDocument();
  });

  it('renders links to filtered restaurant pages', () => {
    (useCategories as jest.Mock).mockReturnValue({
      data: mockCategories,
      isLoading: false,
    });

    render(<CategoryCarousel />);

    const italianLink = screen.getByText('Italian').closest('a');
    expect(italianLink).toHaveAttribute('href', '/restaurants?cuisine=italian');
  });

  it('renders skeletons when loading', () => {
    (useCategories as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: true,
    });

    const { container } = render(<CategoryCarousel />);

    // Skeletons are rendered (12 of them)
    const skeletons = container.querySelectorAll('[class*="rounded-2xl"]');
    expect(skeletons.length).toBeGreaterThan(0);
  });
});
