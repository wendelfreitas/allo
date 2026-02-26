import { render, screen } from '@testing-library/react';
import { AnimatedSection } from './AnimatedSection';

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className }: React.HTMLAttributes<HTMLDivElement>) => (
      <div className={className} data-testid="animated-section">
        {children}
      </div>
    ),
  },
}));

describe('<AnimatedSection />', () => {
  it('renders children correctly', () => {
    render(
      <AnimatedSection>
        <p>Hello World</p>
      </AnimatedSection>
    );

    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <AnimatedSection className="my-custom-class">
        <p>Content</p>
      </AnimatedSection>
    );

    expect(screen.getByTestId('animated-section')).toHaveClass(
      'my-custom-class'
    );
  });

  it('renders multiple children', () => {
    render(
      <AnimatedSection>
        <p>First</p>
        <p>Second</p>
      </AnimatedSection>
    );

    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();
  });
});
