import { render, screen, fireEvent } from '@testing-library/react';
import { MobileNav } from './MobileNav';

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, onClick, ...rest }: any) => (
    <a href={href} onClick={onClick} {...rest}>
      {children}
    </a>
  ),
}));

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

describe('<MobileNav />', () => {
  it('should render the Restaurants link', () => {
    const onClose = jest.fn();

    render(<MobileNav onClose={onClose} />);

    expect(screen.getByText('Restaurants')).toBeInTheDocument();
  });

  it('should have the correct href on Restaurants link', () => {
    const onClose = jest.fn();

    render(<MobileNav onClose={onClose} />);

    const link = screen.getByText('Restaurants');
    expect(link.closest('a')).toHaveAttribute('href', '/restaurants');
  });

  it('should call onClose when the Restaurants link is clicked', () => {
    const onClose = jest.fn();

    render(<MobileNav onClose={onClose} />);

    const link = screen.getByText('Restaurants');
    fireEvent.click(link);

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
