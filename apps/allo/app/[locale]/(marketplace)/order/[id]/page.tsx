'use client';

import { use } from 'react';
import { useTranslations } from 'next-intl';
import { Card, Skeleton, Button } from '@allo/ui';
import { ArrowLeft } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { useOrder } from '../../../../../hooks/use-order/use-order';
import { OrderProgress } from '../../../../../components/order/OrderProgress/OrderProgress';
import { OrderDetails } from '../../../../../components/order/OrderDetails/OrderDetails';
import { motion } from 'framer-motion';

export default function OrderTrackingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const t = useTranslations('order');
  const tc = useTranslations('common');
  const { id } = use(params);
  const { data: order, isLoading } = useOrder(id);

  if (isLoading) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <Skeleton className="h-8 w-64 mb-8" />
        <Skeleton className="h-24 mb-8 rounded-xl" />
        <Skeleton className="h-64 rounded-xl" />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <h1 className="text-2xl font-bold">{t('notFound')}</h1>
        <p className="mt-2 text-muted-foreground">
          {t('notFoundHint')}
        </p>
        <Link href="/restaurants">
          <Button className="mt-6">{tc('browseRestaurants')}</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/restaurants"
        className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft size={16} />
        {tc('backToRestaurants')}
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="mb-2 flex items-center justify-between">
          <h1 className="text-2xl font-bold sm:text-3xl">{t('tracking')}</h1>
          <span className="text-sm text-muted-foreground">{order.id}</span>
        </div>

        <Card className="mb-8 p-6">
          <OrderProgress status={order.status} />
          <p className="mt-6 text-center text-sm text-muted-foreground">
            {t(`statusMessages.${order.status}`)}
          </p>
          {order.status !== 'delivered' && (
            <p className="mt-2 text-center text-xs text-muted-foreground">
              {t('estimatedDelivery', {
                time: new Date(order.estimatedDelivery).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                }),
              })}
            </p>
          )}
        </Card>

        <OrderDetails order={order} />
      </motion.div>
    </div>
  );
}
