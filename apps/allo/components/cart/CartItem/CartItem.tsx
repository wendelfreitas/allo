"use client";

import { X } from "lucide-react";
import { Button } from "@allo/ui";
import { QuantitySelector } from "../../shared/QuantitySelector/QuantitySelector";
import { PriceDisplay } from "../../shared/PriceDisplay/PriceDisplay";
import { useCartStore } from "../../../store/cart";
import type { CartItem as CartItemType } from "../../../app/api/_data/types";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);

  return (
    <div className="flex items-center gap-3 rounded-lg bg-muted/50 p-3">
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium truncate">{item.menuItem.name}</h4>
        <PriceDisplay
          cents={item.menuItem.price}
          className="text-xs text-muted-foreground"
        />
      </div>

      <QuantitySelector
        quantity={item.quantity}
        onChange={(q) => updateQuantity(item.id, q)}
        min={1}
      />

      <PriceDisplay
        cents={item.totalPrice}
        className="text-sm font-semibold w-16 text-right"
      />

      <Button
        variant="ghost"
        size="icon"
        className="h-6 w-6 shrink-0 text-muted-foreground hover:text-destructive"
        onClick={() => removeItem(item.id)}
      >
        <X size={14} />
      </Button>
    </div>
  );
}
