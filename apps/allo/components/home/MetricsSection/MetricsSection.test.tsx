import { render, screen } from '@testing-library/react';
import { MetricsSection } from './MetricsSection';

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className }: any) => (
      <div className={className}>{children}</div>
    ),
  },
}));

describe('<MetricsSection />', () => {
  it('renders "500+" metric', () => {
    render(<MetricsSection />);

    expect(screen.getByText('500+')).toBeInTheDocument();
  });

  it('renders "50K+" metric', () => {
    render(<MetricsSection />);

    expect(screen.getByText('50K+')).toBeInTheDocument();
  });

  it('renders "25 min" metric', () => {
    render(<MetricsSection />);

    expect(screen.getByText('25 min')).toBeInTheDocument();
  });

  it('renders "4.8" metric', () => {
    render(<MetricsSection />);

    expect(screen.getByText('4.8')).toBeInTheDocument();
  });

  it('renders metric labels', () => {
    render(<MetricsSection />);

    expect(screen.getByText('Restaurants')).toBeInTheDocument();
    expect(screen.getByText('Happy customers')).toBeInTheDocument();
    expect(screen.getByText('Avg. delivery')).toBeInTheDocument();
    expect(screen.getByText('App rating')).toBeInTheDocument();
  });
});
