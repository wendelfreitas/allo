"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from '../../lib/api';
import { queryKeys } from '../keys';
import type { RestaurantWithMenu } from "../../app/api/_data/types";

export function useRestaurant(slug: string) {
  return useQuery({
    queryKey: queryKeys.restaurants.detail(slug),
    queryFn: async () => {
      const { data } = await api.get<{ data: RestaurantWithMenu }>(
        `/restaurants/${slug}`
      );
      return data.data;
    },
    enabled: !!slug,
  });
}
