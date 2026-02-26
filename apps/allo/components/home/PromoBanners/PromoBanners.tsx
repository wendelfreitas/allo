'use client';

import { useTranslations } from 'next-intl';
import { usePromotions } from '../../../hooks/use-promotions/use-promotions';
import { Badge, Button, Skeleton } from '@allo/ui';
import { AnimatedSection } from '../../shared/AnimatedSection/AnimatedSection';
import { SectionLabel } from '../../shared/SectionLabel/SectionLabel';
import Image from 'next/image';

export function PromoBanners() {
  const t = useTranslations('home.promos');
  const { data: promotions, isLoading } = usePromotions();

  if (isLoading) {
    return (
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <Skeleton className="h-64 rounded-2xl" />
            <Skeleton className="h-64 rounded-2xl" />
          </div>
        </div>
      </section>
    );
  }

  const featured = promotions?.slice(0, 2) ?? [];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionLabel>{t('label')}</SectionLabel>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
            {t('title')}
          </h2>
        </AnimatedSection>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {featured.map((promo, i) => (
            <AnimatedSection key={promo.id} delay={i * 0.15}>
              <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card">
                <div className="absolute inset-0 z-0">
                  <Image
                    src={promo.imageUrl}
                    alt={promo.title}
                    fill
                    className="object-cover opacity-20 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="relative z-10 p-8">
                  <Badge className="mb-3">{promo.badge}</Badge>
                  <h3 className="text-xl font-bold">{promo.title}</h3>
                  <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    {promo.description}
                  </p>
                  <Button className="mt-4" size="sm">
                    {promo.ctaText}
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
