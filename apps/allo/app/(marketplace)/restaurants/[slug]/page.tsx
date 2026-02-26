'use client';

import { use, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger, Skeleton } from '@allo/ui';
import { useRestaurant } from '../../../../hooks/use-restaurant/use-restaurant';
import { RestaurantHeader } from '../../../../components/restaurant/RestaurantHeader/RestaurantHeader';
import { MenuCategory } from '../../../../components/restaurant/MenuCategory/MenuCategory';
import { MenuItemDialog } from '../../../../components/restaurant/MenuItemDialog/MenuItemDialog';
import { useCartStore } from '../../../../store/cart';
import type { MenuItem } from '../../../../app/api/_data/types';

export default function RestaurantPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { data: restaurant, isLoading } = useRestaurant(slug);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const addItem = useCartStore((s) => s.addItem);
  const openCart = useCartStore((s) => s.openCart);
  const cartRestaurantId = useCartStore((s) => s.restaurantId);
  const clearCart = useCartStore((s) => s.clearCart);

  const handleAddToCart = (item: MenuItem, quantity: number) => {
    if (!restaurant) return;

    if (cartRestaurantId && cartRestaurantId !== restaurant.id) {
      clearCart();
    }

    for (let i = 0; i < quantity; i++) {
      addItem(item, restaurant.id, restaurant.name);
    }
    openCart();
  };

  if (isLoading) {
    return (
      <div>
        <Skeleton className="h-64 w-full" />
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Skeleton className="h-8 w-64 mb-4" />
          <Skeleton className="h-4 w-96 mb-8" />
          <div className="grid gap-3 sm:grid-cols-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-32 rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!restaurant) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-lg text-muted-foreground">Restaurant not found</p>
      </div>
    );
  }

  const categories = restaurant.menuCategories;
  const firstCategory = categories[0];

  return (
    <div>
      <RestaurantHeader restaurant={restaurant} />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Tabs defaultValue={firstCategory?.id || 'all'}>
          <div className="mb-6 -mx-4 px-4 overflow-x-auto scrollbar-hide sm:mx-0 sm:px-0">
            <TabsList className="inline-flex h-auto w-max gap-2 bg-transparent p-0">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="shrink-0 rounded-full border border-border bg-card px-4 py-2 text-sm data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => {
            const categoryItems = restaurant.menuItems.filter(
              (item) => item.categoryId === category.id
            );
            return (
              <TabsContent key={category.id} value={category.id}>
                <MenuCategory
                  name={category.name}
                  items={categoryItems}
                  onItemClick={setSelectedItem}
                />
              </TabsContent>
            );
          })}
        </Tabs>
      </div>

      <MenuItemDialog
        item={selectedItem}
        open={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
