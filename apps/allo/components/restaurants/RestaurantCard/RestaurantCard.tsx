'use client';

import { Card } from '@allo/ui';
import { Badge } from '@allo/ui';
import { Clock, Bike } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { StarRating } from '../../shared/StarRating/StarRating';
import { PriceDisplay } from '../../shared/PriceDisplay/PriceDisplay';
import type { Restaurant } from '../../../app/api/_data/types';
import { motion } from 'framer-motion';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const t = useTranslations('common');

  return (
    <Link href={`/restaurants/${restaurant.slug}`}>
      <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
        <Card className="overflow-hidden border-border/50 bg-card transition-shadow hover:shadow-xl hover:shadow-primary/5">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={restaurant.imageUrl}
              alt={restaurant.name}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {!restaurant.isOpen && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                <span className="text-lg font-semibold text-white">{t('closed')}</span>
              </div>
            )}
            {restaurant.isFeatured && (
              <Badge className="absolute left-3 top-3 bg-primary text-primary-foreground">
                {t('featured')}
              </Badge>
            )}
          </div>

          <div className="p-4">
            <div className="mb-1 flex items-center justify-between">
              <h3 className="font-semibold text-card-foreground">
                {restaurant.name}
              </h3>
              <StarRating rating={restaurant.rating} />
            </div>

            <p className="mb-3 line-clamp-1 text-sm text-muted-foreground">
              {restaurant.description}
            </p>

            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {restaurant.deliveryTime}
              </span>
              <span className="flex items-center gap-1">
                <Bike size={12} />
                {restaurant.deliveryFee === 0 ? (
                  <span className="text-primary">{t('free')}</span>
                ) : (
                  <PriceDisplay cents={restaurant.deliveryFee} />
                )}
              </span>
              {restaurant.minimumOrder > 0 && (
                <span>
                  {t('min')} <PriceDisplay cents={restaurant.minimumOrder} />
                </span>
              )}
            </div>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {restaurant.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      </motion.div>
    </Link>
  );
}
