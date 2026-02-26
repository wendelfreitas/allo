'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useCategories } from '../../../hooks/use-categories/use-categories';
import { Skeleton } from '@allo/ui';
import { AnimatedSection } from '../../shared/AnimatedSection/AnimatedSection';
import { SectionLabel } from '../../shared/SectionLabel/SectionLabel';

export function CategoryCarousel() {
  const t = useTranslations('home.categories');
  const { data: categories, isLoading } = useCategories();

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionLabel>{t('label')}</SectionLabel>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
            {t('title')}
          </h2>
        </AnimatedSection>

        <div className="mt-8 flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {isLoading
            ? Array.from({ length: 12 }).map((_, i) => (
                <Skeleton key={i} className="h-24 w-24 shrink-0 rounded-2xl" />
              ))
            : categories?.map((category) => (
                <Link
                  key={category.id}
                  href={`/restaurants?cuisine=${category.slug}`}
                  className="group flex shrink-0 flex-col items-center gap-2"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-card text-3xl transition-all group-hover:scale-105 group-hover:bg-primary/10 group-hover:shadow-lg">
                    {category.emoji}
                  </div>
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground">
                    {category.name}
                  </span>
                </Link>
              ))}
        </div>
      </div>
    </section>
  );
}
