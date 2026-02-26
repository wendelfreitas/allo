import { render, screen } from '@testing-library/react';
import { StarRating } from './StarRating';

describe('<StarRating />', () => {
  it('displays the rating formatted to one decimal place', () => {
    render(<StarRating rating={4.8} />);

    expect(screen.getByText('4.8')).toBeInTheDocument();
  });

  it('formats whole number ratings with one decimal', () => {
    render(<StarRating rating={5} />);

    expect(screen.getByText('5.0')).toBeInTheDocument();
  });

  it('displays the review count when provided', () => {
    render(<StarRating rating={4.5} reviewCount={120} />);

    expect(screen.getByText('4.5')).toBeInTheDocument();
    expect(screen.getByText('(120)')).toBeInTheDocument();
  });

  it('does not display a review count when not provided', () => {
    const { container } = render(<StarRating rating={3.2} />);

    expect(screen.getByText('3.2')).toBeInTheDocument();
    expect(container.textContent).not.toContain('(');
  });

  it('renders a star icon', () => {
    const { container } = render(<StarRating rating={4.0} />);

    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });
});
