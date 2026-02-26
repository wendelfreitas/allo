import { render, screen } from '@testing-library/react';
import { SortSelect } from './SortSelect';

describe('<SortSelect />', () => {
  it('renders the sort trigger with the current value label', () => {
    render(<SortSelect value="rating" onChange={jest.fn()} />);

    expect(screen.getByText('Top Rated')).toBeInTheDocument();
  });

  it('renders the trigger for "Fastest Delivery"', () => {
    render(<SortSelect value="delivery_time" onChange={jest.fn()} />);

    expect(screen.getByText('Fastest Delivery')).toBeInTheDocument();
  });

  it('renders the trigger for "Lowest Fee"', () => {
    render(<SortSelect value="delivery_fee" onChange={jest.fn()} />);

    expect(screen.getByText('Lowest Fee')).toBeInTheDocument();
  });

  it('renders the trigger for "Name A-Z"', () => {
    render(<SortSelect value="name" onChange={jest.fn()} />);

    expect(screen.getByText('Name A-Z')).toBeInTheDocument();
  });
});
