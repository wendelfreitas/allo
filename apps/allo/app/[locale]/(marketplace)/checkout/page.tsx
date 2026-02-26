'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button, Card, Separator } from '@allo/ui';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { Link, useRouter } from '@/i18n/navigation';
import { useCartStore } from '../../../../store/cart';
import { useCreateOrder } from '../../../../hooks/use-create-order/use-create-order';
import { DeliveryForm } from '../../../../components/checkout/DeliveryForm/DeliveryForm';
import { PaymentSelector } from '../../../../components/checkout/PaymentSelector/PaymentSelector';
import { OrderReview } from '../../../../components/checkout/OrderReview/OrderReview';
import { restaurants } from '../../../../app/api/_data/restaurants';

export default function CheckoutPage() {
  const t = useTranslations('checkout');
  const tc = useTranslations('common');
  const router = useRouter();
  const { items, restaurantId, restaurantName } = useCartStore();
  const clearCart = useCartStore((s) => s.clearCart);
  const { mutateAsync: createOrder, isPending } = useCreateOrder();

  const [address, setAddress] = useState('');
  const [instructions, setInstructions] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const restaurant = restaurants.find((r) => r.id === restaurantId);
  const deliveryFee = restaurant?.deliveryFee ?? 299;

  const canSubmit = items.length > 0 && address.trim().length > 0;

  const handleSubmit = async () => {
    if (!canSubmit || !restaurantId || !restaurantName) return;

    setIsSubmitted(true);

    return createOrder(
      {
        items: items.map((item) => ({
          name: item.menuItem.name,
          quantity: item.quantity,
          price: item.menuItem.price,
        })),
        restaurantId,
        restaurantName,
        deliveryAddress: `${address}${instructions ? ` (${instructions})` : ''}`,
        paymentMethod,
        deliveryFee,
      },
      {
        onSuccess: (order) => {
          clearCart();
          router.push(`/order/${order.id}`);
        },
      }
    );
  };

  if (items.length === 0 && !isSubmitted) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
        <h1 className="text-2xl font-bold">{t('emptyCart')}</h1>
        <p className="mt-2 text-muted-foreground">{t('emptyCartHint')}</p>
        <Link href="/restaurants">
          <Button className="mt-6">{tc('browseRestaurants')}</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/restaurants"
        className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft size={16} />
        {tc('backToRestaurants')}
      </Link>

      <h1 className="mb-8 text-3xl font-bold">{t('title')}</h1>

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="space-y-8">
          <Card className="p-6">
            <DeliveryForm
              address={address}
              onAddressChange={setAddress}
              instructions={instructions}
              onInstructionsChange={setInstructions}
            />
          </Card>

          <Card className="p-6">
            <PaymentSelector
              value={paymentMethod}
              onChange={setPaymentMethod}
            />
          </Card>
        </div>

        <div>
          <Card className="sticky top-24 p-6">
            <OrderReview />
            <Separator className="my-4" />
            <Button
              className="w-full"
              size="lg"
              onClick={handleSubmit}
              disabled={!canSubmit || isPending}
            >
              {isPending ? (
                <>
                  <Loader2 size={16} className="mr-2 animate-spin" />
                  {t('placingOrder')}
                </>
              ) : (
                t('placeOrder')
              )}
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
