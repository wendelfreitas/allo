import { render, screen, fireEvent } from '@testing-library/react';
import { DeliveryForm } from './DeliveryForm';

describe('<DeliveryForm />', () => {
  it('renders the Delivery Address heading', () => {
    render(
      <DeliveryForm
        address=""
        onAddressChange={jest.fn()}
        instructions=""
        onInstructionsChange={jest.fn()}
      />
    );

    expect(
      screen.getByRole('heading', { name: 'Delivery Address' })
    ).toBeInTheDocument();
  });

  it('renders the Street Address label and input', () => {
    render(
      <DeliveryForm
        address=""
        onAddressChange={jest.fn()}
        instructions=""
        onInstructionsChange={jest.fn()}
      />
    );

    expect(screen.getByLabelText('Street Address')).toBeInTheDocument();
  });

  it('renders the Delivery Instructions label and input', () => {
    render(
      <DeliveryForm
        address=""
        onAddressChange={jest.fn()}
        instructions=""
        onInstructionsChange={jest.fn()}
      />
    );

    expect(
      screen.getByLabelText('Delivery Instructions (optional)')
    ).toBeInTheDocument();
  });

  it('displays the current address value', () => {
    render(
      <DeliveryForm
        address="456 Oak Ave"
        onAddressChange={jest.fn()}
        instructions=""
        onInstructionsChange={jest.fn()}
      />
    );

    expect(screen.getByLabelText('Street Address')).toHaveValue('456 Oak Ave');
  });

  it('displays the current instructions value', () => {
    render(
      <DeliveryForm
        address=""
        onAddressChange={jest.fn()}
        instructions="Leave at door"
        onInstructionsChange={jest.fn()}
      />
    );

    expect(
      screen.getByLabelText('Delivery Instructions (optional)')
    ).toHaveValue('Leave at door');
  });

  it('calls onAddressChange when typing in the address input', () => {
    const onAddressChange = jest.fn();
    render(
      <DeliveryForm
        address=""
        onAddressChange={onAddressChange}
        instructions=""
        onInstructionsChange={jest.fn()}
      />
    );

    fireEvent.change(screen.getByLabelText('Street Address'), {
      target: { value: '789 Elm St' },
    });

    expect(onAddressChange).toHaveBeenCalledWith('789 Elm St');
  });

  it('calls onInstructionsChange when typing in the instructions input', () => {
    const onInstructionsChange = jest.fn();
    render(
      <DeliveryForm
        address=""
        onAddressChange={jest.fn()}
        instructions=""
        onInstructionsChange={onInstructionsChange}
      />
    );

    fireEvent.change(
      screen.getByLabelText('Delivery Instructions (optional)'),
      {
        target: { value: 'Ring doorbell' },
      }
    );

    expect(onInstructionsChange).toHaveBeenCalledWith('Ring doorbell');
  });
});
