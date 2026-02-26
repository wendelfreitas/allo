'use client';

import { useQuery } from '@tanstack/react-query';
import { api } from '../../lib/api';
import { queryKeys } from '../keys';
import type { Category } from '../../app/api/_data/types';

export function useCategories() {
  return useQuery({
    queryKey: queryKeys.categories.all,
    queryFn: async () => {
      const { data } = await api.get<{ data: Category[] }>('/categories');
      return data.data;
    },
  });
}
