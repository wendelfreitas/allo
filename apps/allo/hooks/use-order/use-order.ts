'use client';

import { useQuery } from '@tanstack/react-query';
import { api } from '../../lib/api';
import { queryKeys } from '../keys';
import type { Order } from '../../app/api/_data/types';

export function useOrder(id: string) {
  return useQuery({
    queryKey: queryKeys.orders.detail(id),
    queryFn: async () => {
      const { data } = await api.get<{ data: Order }>(`/orders/${id}`);
      return data.data;
    },
    enabled: !!id,
    refetchInterval: (query) => {
      const order = query.state.data;
      if (order?.status === 'delivered') return false;
      return 5000;
    },
  });
}
