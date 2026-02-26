'use client';

import { Badge, Skeleton } from '@allo/ui';
import { useCategories } from '../../../hooks/use-categories/use-categories';

interface RestaurantFiltersProps {
  selectedCuisine: string | null;
  onCuisineChange: (cuisine: string | null) => void;
}

export function RestaurantFilters({
  selectedCuisine,
  onCuisineChange,
}: RestaurantFiltersProps) {
  const { data: categories, isLoading } = useCategories();

  return (
    <div className="flex flex-wrap gap-2">
      <Badge
        variant={selectedCuisine === null ? 'default' : 'outline'}
        className="cursor-pointer transition-colors"
        onClick={() => onCuisineChange(null)}
      >
        All
      </Badge>

      {isLoading
        ? Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-6 w-16 rounded-full" />
          ))
        : categories?.map((category) => (
            <Badge
              key={category.id}
              variant={
                selectedCuisine === category.slug ? 'default' : 'outline'
              }
              className="cursor-pointer transition-colors"
              onClick={() =>
                onCuisineChange(
                  selectedCuisine === category.slug ? null : category.slug
                )
              }
            >
              {category.emoji} {category.name}
            </Badge>
          ))}
    </div>
  );
}
