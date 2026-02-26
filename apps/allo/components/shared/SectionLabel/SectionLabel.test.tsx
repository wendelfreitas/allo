import { render, screen } from '@testing-library/react';
import { SectionLabel } from './SectionLabel';

describe('<SectionLabel />', () => {
  it('renders the text content', () => {
    render(<SectionLabel>Popular Items</SectionLabel>);

    expect(screen.getByText('Popular Items')).toBeInTheDocument();
  });

  it('applies the uppercase CSS class', () => {
    render(<SectionLabel>Featured</SectionLabel>);

    const element = screen.getByText('Featured');
    expect(element).toHaveClass('uppercase');
  });

  it('applies base styling classes', () => {
    render(<SectionLabel>Trending</SectionLabel>);

    const element = screen.getByText('Trending');
    expect(element).toHaveClass('text-xs');
    expect(element).toHaveClass('font-bold');
    expect(element).toHaveClass('text-primary');
  });

  it('applies a custom className', () => {
    render(<SectionLabel className="mt-4">Deals</SectionLabel>);

    const element = screen.getByText('Deals');
    expect(element).toHaveClass('mt-4');
  });

  it('preserves base classes when custom className is provided', () => {
    render(<SectionLabel className="mb-2">New</SectionLabel>);

    const element = screen.getByText('New');
    expect(element).toHaveClass('uppercase');
    expect(element).toHaveClass('mb-2');
  });

  it('renders as a span element', () => {
    render(<SectionLabel>Category</SectionLabel>);

    const element = screen.getByText('Category');
    expect(element.tagName).toBe('SPAN');
  });
});
