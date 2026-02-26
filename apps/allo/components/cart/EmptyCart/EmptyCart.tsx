import { ShoppingBag } from 'lucide-react';
import { Button } from '@allo/ui';
import Link from 'next/link';

export function EmptyCart() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 py-12">
      <div className="rounded-full bg-muted p-4">
        <ShoppingBag size={32} className="text-muted-foreground" />
      </div>
      <div className="text-center">
        <h3 className="font-semibold">Your cart is empty</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Browse restaurants and add items to get started
        </p>
      </div>
      <Link href="/restaurants">
        <Button variant="outline">Browse Restaurants</Button>
      </Link>
    </div>
  );
}
