import { render, screen } from '@testing-library/react';
import { OrderProgress } from './OrderProgress';

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className }: any) => (
      <div className={className}>{children}</div>
    ),
  },
}));

describe('<OrderProgress />', () => {
  it('renders the Confirmed step label', () => {
    render(<OrderProgress status="confirmed" />);

    expect(screen.getByText('Confirmed')).toBeInTheDocument();
  });

  it('renders the Preparing step label', () => {
    render(<OrderProgress status="confirmed" />);

    expect(screen.getByText('Preparing')).toBeInTheDocument();
  });

  it('renders the Ready step label', () => {
    render(<OrderProgress status="confirmed" />);

    expect(screen.getByText('Ready')).toBeInTheDocument();
  });

  it('renders the On the way step label', () => {
    render(<OrderProgress status="confirmed" />);

    expect(screen.getByText('On the way')).toBeInTheDocument();
  });

  it('renders the Delivered step label', () => {
    render(<OrderProgress status="confirmed" />);

    expect(screen.getByText('Delivered')).toBeInTheDocument();
  });

  it('renders all five step labels simultaneously', () => {
    render(<OrderProgress status="preparing" />);

    const labels = [
      'Confirmed',
      'Preparing',
      'Ready',
      'On the way',
      'Delivered',
    ];
    labels.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });
});
