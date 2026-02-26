'use client';

import { Button, Input } from '@allo/ui';
import { Search, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link, useRouter } from '@/i18n/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';

export function HeroSection() {
  const t = useTranslations('home.hero');
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/restaurants?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary">
              {t('badge')}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            {t('titleStart')}{' '}
            <span className="font-playfair italic text-primary">{t('titleHighlight')}</span>
            <br />
            {t('titleEnd')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground"
          >
            {t('subtitle')}
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSearch}
            className="mx-auto mt-8 flex max-w-xl gap-2"
          >
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                type="text"
                placeholder={t('searchPlaceholder')}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="h-12 pl-10 text-base"
              />
            </div>
            <Button type="submit" size="lg" className="h-12 px-6">
              {t('searchButton')}
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8"
          >
            <Link href="/restaurants">
              <Button
                variant="ghost"
                className="text-muted-foreground hover:text-foreground"
              >
                {t('browseAll')}
                <ArrowRight size={16} className="ml-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
