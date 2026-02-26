"use client";

import { RadioGroup, RadioGroupItem, Label } from "@allo/ui";
import { CreditCard, Banknote, Smartphone } from "lucide-react";

interface PaymentSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const paymentMethods = [
  { id: "card", label: "Credit Card", icon: CreditCard },
  { id: "cash", label: "Cash on Delivery", icon: Banknote },
  { id: "pix", label: "PIX", icon: Smartphone },
];

export function PaymentSelector({ value, onChange }: PaymentSelectorProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Payment Method</h2>
      <RadioGroup value={value} onValueChange={onChange}>
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className="flex items-center gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-muted/50"
          >
            <RadioGroupItem value={method.id} id={method.id} />
            <method.icon size={18} className="text-muted-foreground" />
            <Label htmlFor={method.id} className="cursor-pointer flex-1">
              {method.label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
