import { render, screen, fireEvent } from '@testing-library/react';
import { RestaurantFilters } from './RestaurantFilters';
import { useCategories } from '../../../hooks/use-categories/use-categories';

jest.mock('../../../hooks/use-categories/use-categories', () => ({
  useCategories: jest.fn(),
}));

const mockCategories = [
  { id: 'c1', name: 'Italian', slug: 'italian', emoji: '🍕' },
  { id: 'c2', name: 'Japanese', slug: 'japanese', emoji: '🍣' },
  { id: 'c3', name: 'Mexican', slug: 'mexican', emoji: '🌮' },
];

describe('<RestaurantFilters />', () => {
  beforeEach(() => {
    (useCategories as jest.Mock).mockReturnValue({
      data: mockCategories,
      isLoading: false,
    });
  });

  it('renders the "All" badge', () => {
    render(
      <RestaurantFilters selectedCuisine={null} onCuisineChange={jest.fn()} />
    );

    expect(screen.getByText('All')).toBeInTheDocument();
  });

  it('renders cuisine badges from useCategories', () => {
    render(
      <RestaurantFilters selectedCuisine={null} onCuisineChange={jest.fn()} />
    );

    expect(screen.getByText(/Italian/)).toBeInTheDocument();
    expect(screen.getByText(/Japanese/)).toBeInTheDocument();
    expect(screen.getByText(/Mexican/)).toBeInTheDocument();
  });

  it('calls onCuisineChange with the cuisine slug when a cuisine badge is clicked', () => {
    const onCuisineChange = jest.fn();

    render(
      <RestaurantFilters
        selectedCuisine={null}
        onCuisineChange={onCuisineChange}
      />
    );

    fireEvent.click(screen.getByText(/Italian/));

    expect(onCuisineChange).toHaveBeenCalledWith('italian');
  });

  it('calls onCuisineChange with null when "All" is clicked', () => {
    const onCuisineChange = jest.fn();

    render(
      <RestaurantFilters
        selectedCuisine="italian"
        onCuisineChange={onCuisineChange}
      />
    );

    fireEvent.click(screen.getByText('All'));

    expect(onCuisineChange).toHaveBeenCalledWith(null);
  });

  it('calls onCuisineChange with null when the already selected cuisine is clicked', () => {
    const onCuisineChange = jest.fn();

    render(
      <RestaurantFilters
        selectedCuisine="italian"
        onCuisineChange={onCuisineChange}
      />
    );

    fireEvent.click(screen.getByText(/Italian/));

    expect(onCuisineChange).toHaveBeenCalledWith(null);
  });

  it('renders skeletons when loading', () => {
    (useCategories as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: true,
    });

    const { container } = render(
      <RestaurantFilters selectedCuisine={null} onCuisineChange={jest.fn()} />
    );

    const skeletons = container.querySelectorAll('[class*="rounded-full"]');
    expect(skeletons.length).toBeGreaterThan(0);
  });
});
