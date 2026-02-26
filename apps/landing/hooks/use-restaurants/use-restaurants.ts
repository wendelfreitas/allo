"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from '../../lib/api';
import { queryKeys } from '../keys';
import type { Restaurant, PaginatedResponse } from "../../app/api/_data/types";

interface UseRestaurantsParams {
  q?: string;
  cuisine?: string;
  sort?: string;
  page?: string;
  pageSize?: string;
  featured?: string;
}

export function useRestaurants(params: UseRestaurantsParams = {}) {
  return useQuery({
    queryKey: queryKeys.restaurants.list({ ...params }),
    queryFn: async () => {
      const searchParams = new URLSearchParams();
      Object.entries(params).forEach(([key, value]) => {
        if (value) searchParams.set(key, value);
      });
      const { data } = await api.get<PaginatedResponse<Restaurant>>(
        `/restaurants?${searchParams.toString()}`
      );
      return data;
    },
  });
}
