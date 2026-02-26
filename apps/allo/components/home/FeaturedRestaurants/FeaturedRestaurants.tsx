'use client';

import { useRestaurants } from '../../../hooks/use-restaurants/use-restaurants';
import { RestaurantCard } from '../../restaurants/RestaurantCard/RestaurantCard';
import { Skeleton } from '@allo/ui';
import { AnimatedSection } from '../../shared/AnimatedSection/AnimatedSection';
import { SectionLabel } from '../../shared/SectionLabel/SectionLabel';
import Link from 'next/link';
import { Button } from '@allo/ui';
import { ArrowRight } from 'lucide-react';

export function FeaturedRestaurants() {
  const { data, isLoading } = useRestaurants({
    featured: 'true',
    pageSize: '6',
  });

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-end justify-between">
            <div>
              <SectionLabel>Top Picks</SectionLabel>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                Featured restaurants
              </h2>
            </div>
            <Link href="/restaurants">
              <Button variant="ghost" className="hidden sm:flex">
                View all
                <ArrowRight size={16} className="ml-1" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="space-y-3">
                  <Skeleton className="aspect-16/10 w-full rounded-xl" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              ))
            : data?.data.map((restaurant, i) => (
                <AnimatedSection key={restaurant.id} delay={i * 0.1}>
                  <RestaurantCard restaurant={restaurant} />
                </AnimatedSection>
              ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/restaurants">
            <Button variant="outline">
              View all restaurants
              <ArrowRight size={16} className="ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
