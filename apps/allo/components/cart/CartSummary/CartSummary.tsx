"use client";

import { useCartStore } from "../../../store/cart";
import { PriceDisplay } from "../../shared/PriceDisplay/PriceDisplay";
import { restaurants } from "../../../app/api/_data/restaurants";

export function CartSummary() {
  const items = useCartStore((s) => s.items);
  const restaurantId = useCartStore((s) => s.restaurantId);

  const subtotal = items.reduce((sum, item) => sum + item.totalPrice, 0);
  const restaurant = restaurants.find((r) => r.id === restaurantId);
  const deliveryFee = restaurant?.deliveryFee ?? 299;
  const total = subtotal + deliveryFee;

  return (
    <div className="space-y-2 py-4">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Subtotal</span>
        <PriceDisplay cents={subtotal} />
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Delivery fee</span>
        <PriceDisplay cents={deliveryFee} />
      </div>
      <div className="flex justify-between text-base font-semibold pt-2 border-t border-border">
        <span>Total</span>
        <PriceDisplay cents={total} className="text-primary" />
      </div>
    </div>
  );
}
