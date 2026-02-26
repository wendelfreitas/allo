"use client";

import { Input, Label } from "@allo/ui";

interface DeliveryFormProps {
  address: string;
  onAddressChange: (address: string) => void;
  instructions: string;
  onInstructionsChange: (instructions: string) => void;
}

export function DeliveryForm({
  address,
  onAddressChange,
  instructions,
  onInstructionsChange,
}: DeliveryFormProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Delivery Address</h2>
      <div className="space-y-3">
        <div>
          <Label htmlFor="address">Street Address</Label>
          <Input
            id="address"
            placeholder="123 Main St, Apt 4B"
            value={address}
            onChange={(e) => onAddressChange(e.target.value)}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="instructions">Delivery Instructions (optional)</Label>
          <Input
            id="instructions"
            placeholder="Ring doorbell, leave at door, etc."
            value={instructions}
            onChange={(e) => onInstructionsChange(e.target.value)}
            className="mt-1"
          />
        </div>
      </div>
    </div>
  );
}
