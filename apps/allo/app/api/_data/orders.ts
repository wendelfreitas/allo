import { Order, OrderStatus, OrderStatusHistory } from "./types";

const ORDER_STATUSES: OrderStatus[] = [
  "confirmed",
  "preparing",
  "ready",
  "out_for_delivery",
  "delivered",
];

const STATUS_DURATIONS: Record<OrderStatus, number> = {
  confirmed: 2 * 60 * 1000,
  preparing: 8 * 60 * 1000,
  ready: 3 * 60 * 1000,
  out_for_delivery: 10 * 60 * 1000,
  delivered: 0,
};

const orderStore = new Map<string, Order>();

export function createOrder(data: {
  items: { name: string; quantity: number; price: number }[];
  restaurantId: string;
  restaurantName: string;
  deliveryAddress: string;
  paymentMethod: string;
  deliveryFee: number;
}): Order {
  const id = `ORD-${Date.now().toString(36).toUpperCase()}`;
  const subtotal = data.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const now = new Date().toISOString();

  const order: Order = {
    id,
    restaurantId: data.restaurantId,
    restaurantName: data.restaurantName,
    items: data.items,
    subtotal,
    deliveryFee: data.deliveryFee,
    total: subtotal + data.deliveryFee,
    status: "confirmed",
    statusHistory: [{ status: "confirmed", timestamp: now }],
    deliveryAddress: data.deliveryAddress,
    paymentMethod: data.paymentMethod,
    estimatedDelivery: new Date(Date.now() + 35 * 60 * 1000).toISOString(),
    createdAt: now,
  };

  orderStore.set(id, order);
  return order;
}

export function getOrder(id: string): Order | undefined {
  const order = orderStore.get(id);
  if (!order) return undefined;

  // Simulate progress based on elapsed time
  const createdAt = new Date(order.createdAt).getTime();
  const elapsed = Date.now() - createdAt;

  let cumulativeTime = 0;
  let currentStatus: OrderStatus = "confirmed";
  const statusHistory: OrderStatusHistory[] = [
    { status: "confirmed", timestamp: order.createdAt },
  ];

  for (let i = 0; i < ORDER_STATUSES.length - 1; i++) {
    const status = ORDER_STATUSES[i]!;
    cumulativeTime += STATUS_DURATIONS[status];

    if (elapsed > cumulativeTime && i + 1 < ORDER_STATUSES.length) {
      const nextStatus = ORDER_STATUSES[i + 1]!;
      currentStatus = nextStatus;
      statusHistory.push({
        status: nextStatus,
        timestamp: new Date(createdAt + cumulativeTime).toISOString(),
      });
    }
  }

  const updatedOrder = {
    ...order,
    status: currentStatus,
    statusHistory,
  };

  orderStore.set(id, updatedOrder);
  return updatedOrder;
}
