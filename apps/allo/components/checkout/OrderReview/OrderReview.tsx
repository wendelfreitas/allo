'use client';

import { Separator } from '@allo/ui';
import { useTranslations } from 'next-intl';
import { useCartStore } from '../../../store/cart';
import { PriceDisplay } from '../../shared/PriceDisplay/PriceDisplay';
import { restaurants } from '../../../app/api/_data/restaurants';

export function OrderReview() {
  const t = useTranslations('checkout');
  const items = useCartStore((s) => s.items);
  const restaurantId = useCartStore((s) => s.restaurantId);
  const restaurantName = useCartStore((s) => s.restaurantName);

  const subtotal = items.reduce((sum, item) => sum + item.totalPrice, 0);
  const restaurant = restaurants.find((r) => r.id === restaurantId);
  const deliveryFee = restaurant?.deliveryFee ?? 299;
  const total = subtotal + deliveryFee;

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">{t('orderReview')}</h2>
      {restaurantName && (
        <p className="text-sm text-muted-foreground">{t('from', { restaurantName })}</p>
      )}

      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between text-sm">
            <span>
              {item.quantity}x {item.menuItem.name}
            </span>
            <PriceDisplay cents={item.totalPrice} />
          </div>
        ))}
      </div>

      <Separator />

      <div className="space-y-1">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">{t('subtotal')}</span>
          <PriceDisplay cents={subtotal} />
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">{t('deliveryFee')}</span>
          <PriceDisplay cents={deliveryFee} />
        </div>
        <div className="flex justify-between text-base font-semibold pt-2">
          <span>{t('total')}</span>
          <PriceDisplay cents={total} className="text-primary" />
        </div>
      </div>
    </div>
  );
}
