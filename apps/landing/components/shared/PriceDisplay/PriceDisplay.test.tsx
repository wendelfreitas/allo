import { render, screen } from '@testing-library/react';
import { PriceDisplay } from './PriceDisplay';

describe('<PriceDisplay />', () => {
  it('converts cents to dollars with two decimal places', () => {
    render(<PriceDisplay cents={1299} />);

    expect(screen.getByText('$12.99')).toBeInTheDocument();
  });

  it('displays zero cents as $0.00', () => {
    render(<PriceDisplay cents={0} />);

    expect(screen.getByText('$0.00')).toBeInTheDocument();
  });

  it('handles exact dollar amounts without leftover cents', () => {
    render(<PriceDisplay cents={500} />);

    expect(screen.getByText('$5.00')).toBeInTheDocument();
  });

  it('handles small cent values', () => {
    render(<PriceDisplay cents={7} />);

    expect(screen.getByText('$0.07')).toBeInTheDocument();
  });

  it('applies a custom className', () => {
    render(<PriceDisplay cents={999} className="text-lg font-bold" />);

    const element = screen.getByText('$9.99');
    expect(element).toHaveClass('text-lg');
    expect(element).toHaveClass('font-bold');
  });

  it('uses an empty className by default', () => {
    render(<PriceDisplay cents={100} />);

    const element = screen.getByText('$1.00');
    expect(element.className).toBe('');
  });
});
