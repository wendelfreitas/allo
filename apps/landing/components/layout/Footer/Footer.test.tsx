import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href }: any) => <a href={href}>{children}</a>,
}));

describe('<Footer />', () => {
  it('should render the logo', () => {
    render(<Footer />);

    expect(screen.getByText('all')).toBeInTheDocument();
    expect(screen.getByText('O')).toBeInTheDocument();
  });

  it('should render the tagline', () => {
    render(<Footer />);

    expect(
      screen.getByText(
        'Premium food delivery from the best restaurants in your city.'
      )
    ).toBeInTheDocument();
  });

  it('should render the Explore section', () => {
    render(<Footer />);

    expect(screen.getByText('Explore')).toBeInTheDocument();
    expect(screen.getByText('Restaurants')).toBeInTheDocument();
    expect(screen.getByText('Pizza')).toBeInTheDocument();
    expect(screen.getByText('Sushi')).toBeInTheDocument();
    expect(screen.getByText('Burgers')).toBeInTheDocument();
  });

  it('should render the Company section', () => {
    render(<Footer />);

    expect(screen.getByText('Company')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Careers')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
  });

  it('should render the Support section', () => {
    render(<Footer />);

    expect(screen.getByText('Support')).toBeInTheDocument();
    expect(screen.getByText('Help Center')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Terms')).toBeInTheDocument();
  });

  it('should render the copyright text with current year', () => {
    render(<Footer />);

    const year = new Date().getFullYear();
    expect(
      screen.getByText(
        `\u00A9 ${year} allO Eats. All rights reserved. This is a demo application.`
      )
    ).toBeInTheDocument();
  });
});
