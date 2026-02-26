'use client';

import { Card, Separator } from '@allo/ui';
import { MapPin, CreditCard, Store } from 'lucide-react';
import { PriceDisplay } from '../../shared/PriceDisplay/PriceDisplay';
import type { Order } from '../../../app/api/_data/types';

interface OrderDetailsProps {
  order: Order;
}

export function OrderDetails({ order }: OrderDetailsProps) {
  return (
    <Card className="p-6">
      <h2 className="mb-4 text-lg font-semibold">Order Details</h2>

      <div className="space-y-3 text-sm">
        <div className="flex items-start gap-2">
          <Store size={16} className="mt-0.5 text-muted-foreground shrink-0" />
          <div>
            <p className="font-medium">{order.restaurantName}</p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <MapPin size={16} className="mt-0.5 text-muted-foreground shrink-0" />
          <p className="text-muted-foreground">{order.deliveryAddress}</p>
        </div>

        <div className="flex items-start gap-2">
          <CreditCard
            size={16}
            className="mt-0.5 text-muted-foreground shrink-0"
          />
          <p className="capitalize text-muted-foreground">
            {order.paymentMethod === 'card'
              ? 'Credit Card'
              : order.paymentMethod === 'pix'
                ? 'PIX'
                : 'Cash on Delivery'}
          </p>
        </div>
      </div>

      <Separator className="my-4" />

      <h3 className="mb-3 font-medium">Items</h3>
      <div className="space-y-2">
        {order.items.map((item, i) => (
          <div key={i} className="flex justify-between text-sm">
            <span>
              {item.quantity}x {item.name}
            </span>
            <PriceDisplay cents={item.price * item.quantity} />
          </div>
        ))}
      </div>

      <Separator className="my-4" />

      <div className="space-y-1 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <PriceDisplay cents={order.subtotal} />
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Delivery fee</span>
          <PriceDisplay cents={order.deliveryFee} />
        </div>
        <div className="flex justify-between text-base font-semibold pt-2">
          <span>Total</span>
          <PriceDisplay cents={order.total} className="text-primary" />
        </div>
      </div>
    </Card>
  );
}
