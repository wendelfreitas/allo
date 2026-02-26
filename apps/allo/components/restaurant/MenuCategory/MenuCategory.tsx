"use client";

import type { MenuItem as MenuItemType } from "../../../app/api/_data/types";
import { MenuItemCard } from "../MenuItemCard/MenuItemCard";

interface MenuCategoryProps {
  name: string;
  items: MenuItemType[];
  onItemClick: (item: MenuItemType) => void;
}

export function MenuCategory({ name, items, onItemClick }: MenuCategoryProps) {
  if (items.length === 0) return null;

  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">{name}</h3>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <MenuItemCard
            key={item.id}
            item={item}
            onClick={() => onItemClick(item)}
          />
        ))}
      </div>
    </div>
  );
}
