import { render, screen, fireEvent } from '@testing-library/react';
import { QuantitySelector } from './QuantitySelector';

describe('<QuantitySelector />', () => {
  it('displays the current quantity', () => {
    const onChange = jest.fn();
    render(<QuantitySelector quantity={3} onChange={onChange} />);

    expect(screen.getByText('3')).toBeInTheDocument();
  });

  it('calls onChange with incremented value when plus is clicked', () => {
    const onChange = jest.fn();
    render(<QuantitySelector quantity={3} onChange={onChange} />);

    const buttons = screen.getAllByRole('button');
    const plusButton = buttons[1]!;
    fireEvent.click(plusButton);

    expect(onChange).toHaveBeenCalledWith(4);
  });

  it('calls onChange with decremented value when minus is clicked', () => {
    const onChange = jest.fn();
    render(<QuantitySelector quantity={3} onChange={onChange} />);

    const buttons = screen.getAllByRole('button');
    const minusButton = buttons[0]!;
    fireEvent.click(minusButton);

    expect(onChange).toHaveBeenCalledWith(2);
  });

  it('disables the minus button when quantity equals min', () => {
    const onChange = jest.fn();
    render(<QuantitySelector quantity={0} onChange={onChange} />);

    const buttons = screen.getAllByRole('button');
    const minusButton = buttons[0];

    expect(minusButton).toBeDisabled();
  });

  it('disables the plus button when quantity equals max', () => {
    const onChange = jest.fn();
    render(<QuantitySelector quantity={99} onChange={onChange} />);

    const buttons = screen.getAllByRole('button');
    const plusButton = buttons[1];

    expect(plusButton).toBeDisabled();
  });

  it('respects a custom min value', () => {
    const onChange = jest.fn();
    render(<QuantitySelector quantity={1} onChange={onChange} min={1} />);

    const buttons = screen.getAllByRole('button');
    const minusButton = buttons[0];

    expect(minusButton).toBeDisabled();
  });

  it('respects a custom max value', () => {
    const onChange = jest.fn();
    render(<QuantitySelector quantity={5} onChange={onChange} max={5} />);

    const buttons = screen.getAllByRole('button');
    const plusButton = buttons[1];

    expect(plusButton).toBeDisabled();
  });

  it('clamps decrement to min value', () => {
    const onChange = jest.fn();
    render(<QuantitySelector quantity={1} onChange={onChange} min={0} />);

    const buttons = screen.getAllByRole('button');
    const minusButton = buttons[0]!;
    fireEvent.click(minusButton);

    expect(onChange).toHaveBeenCalledWith(0);
  });

  it('clamps increment to max value', () => {
    const onChange = jest.fn();
    render(<QuantitySelector quantity={9} onChange={onChange} max={10} />);

    const buttons = screen.getAllByRole('button');
    const plusButton = buttons[1]!;
    fireEvent.click(plusButton);

    expect(onChange).toHaveBeenCalledWith(10);
  });

  it('does not disable buttons when quantity is between min and max', () => {
    const onChange = jest.fn();
    render(
      <QuantitySelector quantity={5} onChange={onChange} min={1} max={10} />
    );

    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).not.toBeDisabled();
    expect(buttons[1]).not.toBeDisabled();
  });
});
