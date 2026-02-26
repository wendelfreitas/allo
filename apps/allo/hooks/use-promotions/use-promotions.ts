"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from '../../lib/api';
import { queryKeys } from '../keys';
import type { Promotion } from "../../app/api/_data/types";

export function usePromotions() {
  return useQuery({
    queryKey: queryKeys.promotions.all,
    queryFn: async () => {
      const { data } = await api.get<{ data: Promotion[] }>("/promotions");
      return data.data;
    },
  });
}
