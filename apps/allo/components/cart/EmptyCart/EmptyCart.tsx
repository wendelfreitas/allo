'use client';

import { ShoppingBag } from 'lucide-react';
import { Button } from '@allo/ui';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export function EmptyCart() {
  const t = useTranslations('cart');
  const tc = useTranslations('common');

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 py-12">
      <div className="rounded-full bg-muted p-4">
        <ShoppingBag size={32} className="text-muted-foreground" />
      </div>
      <div className="text-center">
        <h3 className="font-semibold">{t('empty')}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {t('emptyHint')}
        </p>
      </div>
      <Link href="/restaurants">
        <Button variant="outline">{tc('browseRestaurants')}</Button>
      </Link>
    </div>
  );
}
