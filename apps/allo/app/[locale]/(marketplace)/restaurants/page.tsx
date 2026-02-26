'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Input, Skeleton } from '@allo/ui';
import { Search } from 'lucide-react';
import { useRestaurants } from '../../../../hooks/use-restaurants/use-restaurants';
import { RestaurantFilters } from '../../../../components/restaurants/RestaurantFilters/RestaurantFilters';
import { SortSelect } from '../../../../components/restaurants/SortSelect/SortSelect';
import { RestaurantGrid } from '../../../../components/restaurants/RestaurantGrid/RestaurantGrid';

function RestaurantsContent() {
  const t = useTranslations('restaurants');
  const searchParams = useSearchParams();
  const initialCuisine = searchParams.get('cuisine');
  const initialQuery = searchParams.get('q') || '';

  const [query, setQuery] = useState(initialQuery);
  const [cuisine, setCuisine] = useState<string | null>(initialCuisine);
  const [sort, setSort] = useState('rating');

  const { data, isLoading } = useRestaurants({
    q: query || undefined,
    cuisine: cuisine || undefined,
    sort,
    pageSize: '50',
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{t('title')}</h1>
        <p className="mt-1 text-muted-foreground">
          {t('subtitle')}
        </p>
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative max-w-md flex-1">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            type="text"
            placeholder={t('searchPlaceholder')}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <SortSelect value={sort} onChange={setSort} />
      </div>

      <div className="mb-8">
        <RestaurantFilters
          selectedCuisine={cuisine}
          onCuisineChange={setCuisine}
        />
      </div>

      <RestaurantGrid restaurants={data?.data} isLoading={isLoading} />

      {data && data.total > 0 && (
        <p className="mt-8 text-center text-sm text-muted-foreground">
          {t('showing', { count: data.data.length, total: data.total })}
        </p>
      )}
    </div>
  );
}

function RestaurantsLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Skeleton className="h-10 w-48 mb-8" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="aspect-[16/10] w-full rounded-xl" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function RestaurantsPage() {
  return (
    <Suspense fallback={<RestaurantsLoading />}>
      <RestaurantsContent />
    </Suspense>
  );
}
