import { render, screen } from '@testing-library/react';
import { EmptyCart } from './EmptyCart';

jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

describe('<EmptyCart />', () => {
  it('renders the empty cart heading', () => {
    render(<EmptyCart />);

    expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
  });

  it('renders the descriptive message', () => {
    render(<EmptyCart />);

    expect(
      screen.getByText('Browse restaurants and add items to get started')
    ).toBeInTheDocument();
  });

  it('renders the browse restaurants button', () => {
    render(<EmptyCart />);

    expect(
      screen.getByRole('button', { name: 'Browse Restaurants' })
    ).toBeInTheDocument();
  });

  it('links to the restaurants page', () => {
    render(<EmptyCart />);

    const link = screen.getByRole('link', { name: 'Browse Restaurants' });
    expect(link).toHaveAttribute('href', '/restaurants');
  });
});
