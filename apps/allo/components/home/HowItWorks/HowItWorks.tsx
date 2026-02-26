'use client';

import { Search, UtensilsCrossed, Bike } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { AnimatedSection } from '../../shared/AnimatedSection/AnimatedSection';
import { SectionLabel } from '../../shared/SectionLabel/SectionLabel';

export function HowItWorks() {
  const t = useTranslations('home.howItWorks');

  const steps = [
    {
      icon: Search,
      title: t('step1Title'),
      description: t('step1Description'),
    },
    {
      icon: UtensilsCrossed,
      title: t('step2Title'),
      description: t('step2Description'),
    },
    {
      icon: Bike,
      title: t('step3Title'),
      description: t('step3Description'),
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center">
          <SectionLabel>{t('label')}</SectionLabel>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
            {t('title')}
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <AnimatedSection
              key={step.title}
              delay={i * 0.15}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <step.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {step.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
