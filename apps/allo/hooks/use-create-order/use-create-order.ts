'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '../../lib/api';
import { queryKeys } from '../keys';
import type { Order } from '../../app/api/_data/types';

interface CreateOrderData {
  items: { name: string; quantity: number; price: number }[];
  restaurantId: string;
  restaurantName: string;
  deliveryAddress: string;
  paymentMethod: string;
  deliveryFee: number;
}

export function useCreateOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateOrderData) => {
      const response = await api.post<{ data: Order }>('/orders', data);
      return response.data.data;
    },
    onSuccess: (order) => {
      queryClient.setQueryData(queryKeys.orders.detail(order.id), order);
    },
  });
}
