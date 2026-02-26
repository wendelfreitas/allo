'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  Badge,
  Button,
} from '@allo/ui';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { PriceDisplay } from '../../shared/PriceDisplay/PriceDisplay';
import { QuantitySelector } from '../../shared/QuantitySelector/QuantitySelector';
import { useState } from 'react';
import type { MenuItem } from '../../../app/api/_data/types';

interface MenuItemDialogProps {
  item: MenuItem | null;
  open: boolean;
  onClose: () => void;
  onAddToCart: (item: MenuItem, quantity: number) => void;
}

export function MenuItemDialog({
  item,
  open,
  onClose,
  onAddToCart,
}: MenuItemDialogProps) {
  const t = useTranslations('restaurant');
  const [quantity, setQuantity] = useState(1);

  if (!item) return null;

  const handleAdd = () => {
    onAddToCart(item, quantity);
    setQuantity(1);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          setQuantity(1);
          onClose();
        }
      }}
    >
      <DialogContent className="max-w-md overflow-hidden p-0">
        <div className="relative h-48 w-full">
          <Image
            src={item.imageUrl}
            alt={item.name}
            fill
            className="object-cover"
            sizes="(max-width: 448px) 100vw, 448px"
          />
        </div>

        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-left">{item.name}</DialogTitle>
            <DialogDescription className="text-left">
              {item.description}
            </DialogDescription>
          </DialogHeader>

          {item.tags.length > 0 && (
            <div className="mt-3 flex gap-1.5">
              {item.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          <div className="mt-6 flex items-center justify-between">
            <PriceDisplay
              cents={item.price * quantity}
              className="text-xl font-bold text-primary"
            />
            <QuantitySelector
              quantity={quantity}
              onChange={setQuantity}
              min={1}
            />
          </div>

          <Button className="mt-6 w-full" size="lg" onClick={handleAdd}>
            {t('addToCart')} <PriceDisplay cents={item.price * quantity} />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
