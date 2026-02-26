import { render, screen } from '@testing-library/react';
import { HowItWorks } from './HowItWorks';

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

describe('<HowItWorks />', () => {
  it('renders the section heading', () => {
    render(<HowItWorks />);

    expect(screen.getByText('Three steps to delicious')).toBeInTheDocument();
  });

  it('renders the "Browse & Choose" step', () => {
    render(<HowItWorks />);

    expect(screen.getByText('Browse & Choose')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Explore restaurants near you, filter by cuisine, and find your perfect meal.'
      )
    ).toBeInTheDocument();
  });

  it('renders the "Order & Pay" step', () => {
    render(<HowItWorks />);

    expect(screen.getByText('Order & Pay')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Customize your order, add to cart, and pay securely — all in a few taps.'
      )
    ).toBeInTheDocument();
  });

  it('renders the "Track & Enjoy" step', () => {
    render(<HowItWorks />);

    expect(screen.getByText('Track & Enjoy')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Follow your order in real-time from kitchen to doorstep. Bon appétit!'
      )
    ).toBeInTheDocument();
  });
});
