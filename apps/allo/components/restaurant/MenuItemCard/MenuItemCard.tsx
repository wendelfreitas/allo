'use client';

import { Card, Badge } from '@allo/ui';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { PriceDisplay } from '../../shared/PriceDisplay/PriceDisplay';
import type { MenuItem } from '../../../app/api/_data/types';

interface MenuItemCardProps {
  item: MenuItem;
  onClick: () => void;
}

export function MenuItemCard({ item, onClick }: MenuItemCardProps) {
  const t = useTranslations('common');

  return (
    <Card
      className="flex cursor-pointer overflow-hidden border-border/50 bg-card transition-all hover:bg-muted/50 hover:shadow-md"
      onClick={onClick}
    >
      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-medium">{item.name}</h3>
            {item.isPopular && (
              <Badge
                variant="secondary"
                className="text-[10px] bg-primary/10 text-primary"
              >
                {t('popular')}
              </Badge>
            )}
          </div>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
            {item.description}
          </p>
          {item.tags.length > 0 && (
            <div className="mt-2 flex gap-1">
              {item.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-[10px]">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
        <PriceDisplay
          cents={item.price}
          className="mt-3 text-sm font-semibold text-primary"
        />
      </div>
      <div className="relative h-auto w-28 shrink-0 sm:w-36">
        <Image
          src={item.imageUrl}
          alt={item.name}
          fill
          className="object-cover"
          sizes="144px"
        />
      </div>
    </Card>
  );
}
