'use client';

import { Skeleton } from '@allo/ui';
import { useTranslations } from 'next-intl';
import { RestaurantCard } from '../RestaurantCard/RestaurantCard';
import { AnimatedSection } from '../../shared/AnimatedSection/AnimatedSection';
import type { Restaurant } from '../../../app/api/_data/types';

interface RestaurantGridProps {
  restaurants?: Restaurant[];
  isLoading: boolean;
}

export function RestaurantGrid({
  restaurants,
  isLoading,
}: RestaurantGridProps) {
  const t = useTranslations('restaurants');

  if (isLoading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="aspect-[16/10] w-full rounded-xl" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  if (!restaurants?.length) {
    return (
      <div className="py-20 text-center">
        <p className="text-lg font-medium">{t('noResults')}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          {t('noResultsHint')}
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {restaurants.map((restaurant, i) => (
        <AnimatedSection key={restaurant.id} delay={i * 0.05}>
          <RestaurantCard restaurant={restaurant} />
        </AnimatedSection>
      ))}
    </div>
  );
}
