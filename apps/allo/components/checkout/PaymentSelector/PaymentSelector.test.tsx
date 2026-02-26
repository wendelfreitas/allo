import { render, screen } from '@testing-library/react';
import { PaymentSelector } from './PaymentSelector';

describe('<PaymentSelector />', () => {
  it('renders the Payment Method heading', () => {
    render(<PaymentSelector value="card" onChange={jest.fn()} />);

    expect(
      screen.getByRole('heading', { name: 'Payment Method' })
    ).toBeInTheDocument();
  });

  it('renders the Credit Card payment method', () => {
    render(<PaymentSelector value="card" onChange={jest.fn()} />);

    expect(screen.getByText('Credit Card')).toBeInTheDocument();
  });

  it('renders the Cash on Delivery payment method', () => {
    render(<PaymentSelector value="card" onChange={jest.fn()} />);

    expect(screen.getByText('Cash on Delivery')).toBeInTheDocument();
  });

  it('renders the PIX payment method', () => {
    render(<PaymentSelector value="card" onChange={jest.fn()} />);

    expect(screen.getByText('PIX')).toBeInTheDocument();
  });

  it('renders all three radio inputs', () => {
    render(<PaymentSelector value="card" onChange={jest.fn()} />);

    const radios = screen.getAllByRole('radio');
    expect(radios).toHaveLength(3);
  });
});
