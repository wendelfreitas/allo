'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  Button,
  Separator,
} from '@allo/ui';
import { useCartStore } from '../../../store/cart';
import { CartItem } from '../../cart/CartItem/CartItem';
import { CartSummary } from '../../cart/CartSummary/CartSummary';
import { EmptyCart } from '../../cart/EmptyCart/EmptyCart';
import Link from 'next/link';

export function CartDrawer() {
  const isOpen = useCartStore((s) => s.isOpen);
  const closeCart = useCartStore((s) => s.closeCart);
  const items = useCartStore((s) => s.items);
  const restaurantName = useCartStore((s) => s.restaurantName);

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent side="right" className="flex w-full flex-col sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="text-left">
            Your Order
            {restaurantName && (
              <span className="block text-sm font-normal text-muted-foreground">
                from {restaurantName}
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4">
              <div className="space-y-3">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>

            <Separator />

            <CartSummary />

            <SheetFooter className="mt-4">
              <Link href="/checkout" className="w-full" onClick={closeCart}>
                <Button className="w-full" size="lg">
                  Proceed to Checkout
                </Button>
              </Link>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
