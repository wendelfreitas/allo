'use client';

import { Button } from '@allo/ui';
import { Plus } from 'lucide-react';
import { PriceDisplay } from '../../shared/PriceDisplay/PriceDisplay';
import type { MenuItem } from '../../../app/api/_data/types';

interface AddToCartButtonProps {
  item: MenuItem;
  onClick: () => void;
}

export function AddToCartButton({ item, onClick }: AddToCartButtonProps) {
  return (
    <Button
      size="sm"
      variant="outline"
      className="gap-1"
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      <Plus size={14} />
      <PriceDisplay cents={item.price} className="text-xs" />
    </Button>
  );
}
