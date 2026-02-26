'use client';

import { use } from 'react';
import { Card, Skeleton, Button } from '@allo/ui';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useOrder } from '../../../../hooks/use-order/use-order';
import { OrderProgress } from '../../../../components/order/OrderProgress/OrderProgress';
import { OrderDetails } from '../../../../components/order/OrderDetails/OrderDetails';
import { motion } from 'framer-motion';

export default function OrderTrackingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
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
        <h1 className="text-2xl font-bold">Order not found</h1>
        <p className="mt-2 text-muted-foreground">
          This order doesn&apos;t exist or has expired.
        </p>
        <Link href="/restaurants">
          <Button className="mt-6">Browse Restaurants</Button>
        </Link>
      </div>
    );
  }

  const statusMessages: Record<string, string> = {
    confirmed:
      'Your order has been confirmed! The restaurant will start preparing it soon.',
    preparing: 'The kitchen is working on your order. Sit tight!',
    ready: 'Your order is ready and waiting for a delivery partner.',
    out_for_delivery:
      'Your order is on its way! The delivery partner is heading to you.',
    delivered: 'Your order has been delivered. Enjoy your meal!',
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/restaurants"
        className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft size={16} />
        Back to restaurants
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="mb-2 flex items-center justify-between">
          <h1 className="text-2xl font-bold sm:text-3xl">Order Tracking</h1>
          <span className="text-sm text-muted-foreground">{order.id}</span>
        </div>

        <Card className="mb-8 p-6">
          <OrderProgress status={order.status} />
          <p className="mt-6 text-center text-sm text-muted-foreground">
            {statusMessages[order.status]}
          </p>
          {order.status !== 'delivered' && (
            <p className="mt-2 text-center text-xs text-muted-foreground">
              Estimated delivery:{' '}
              {new Date(order.estimatedDelivery).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </p>
          )}
        </Card>

        <OrderDetails order={order} />
      </motion.div>
    </div>
  );
}
