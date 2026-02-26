import { render, screen, fireEvent } from '@testing-library/react';
import { HeroSection } from './HeroSection';

const mockPush = jest.fn();

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: any) => <a href={href}>{children}</a>,
}));

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
  useSearchParams: () => new URLSearchParams(),
}));

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    form: ({ children, onSubmit, ...props }: any) => (
      <form onSubmit={onSubmit} {...props}>{children}</form>
    ),
  },
}));

describe('<HeroSection />', () => {
  beforeEach(() => {
    mockPush.mockClear();
  });

  it('renders the heading with "finest"', () => {
    render(<HeroSection />);

    expect(screen.getByText('finest')).toBeInTheDocument();
  });

  it('renders a search input', () => {
    render(<HeroSection />);

    expect(
      screen.getByPlaceholderText('Search restaurants, cuisines, dishes...')
    ).toBeInTheDocument();
  });

  it('renders a "Search" button', () => {
    render(<HeroSection />);

    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
  });

  it('renders the "Browse all restaurants" link', () => {
    render(<HeroSection />);

    expect(
      screen.getByRole('button', { name: /Browse all restaurants/i })
    ).toBeInTheDocument();
  });

  it('navigates to restaurants page on search submit', () => {
    render(<HeroSection />);

    const input = screen.getByPlaceholderText(
      'Search restaurants, cuisines, dishes...'
    );
    fireEvent.change(input, { target: { value: 'pizza' } });
    fireEvent.submit(input.closest('form')!);

    expect(mockPush).toHaveBeenCalledWith('/restaurants?q=pizza');
  });

  it('does not navigate when search query is empty', () => {
    render(<HeroSection />);

    const input = screen.getByPlaceholderText(
      'Search restaurants, cuisines, dishes...'
    );
    fireEvent.submit(input.closest('form')!);

    expect(mockPush).not.toHaveBeenCalled();
  });
});
