'use client';

import { Separator } from '@allo/ui';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export function Footer() {
  const t = useTranslations('common.footer');

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tight">
              all<span className="text-primary">O</span>{' '}
              <span className="text-sm font-normal text-muted-foreground">
                eats
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              {t('tagline')}
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">{t('explore')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/restaurants"
                  className="transition-colors hover:text-foreground"
                >
                  {t('restaurants')}
                </Link>
              </li>
              <li>
                <Link
                  href="/restaurants?cuisine=pizza"
                  className="transition-colors hover:text-foreground"
                >
                  {t('pizza')}
                </Link>
              </li>
              <li>
                <Link
                  href="/restaurants?cuisine=sushi"
                  className="transition-colors hover:text-foreground"
                >
                  {t('sushi')}
                </Link>
              </li>
              <li>
                <Link
                  href="/restaurants?cuisine=burgers"
                  className="transition-colors hover:text-foreground"
                >
                  {t('burgers')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">{t('company')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="transition-colors hover:text-foreground cursor-pointer">
                  {t('aboutUs')}
                </span>
              </li>
              <li>
                <span className="transition-colors hover:text-foreground cursor-pointer">
                  {t('careers')}
                </span>
              </li>
              <li>
                <span className="transition-colors hover:text-foreground cursor-pointer">
                  {t('blog')}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">{t('support')}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="transition-colors hover:text-foreground cursor-pointer">
                  {t('helpCenter')}
                </span>
              </li>
              <li>
                <span className="transition-colors hover:text-foreground cursor-pointer">
                  {t('contact')}
                </span>
              </li>
              <li>
                <span className="transition-colors hover:text-foreground cursor-pointer">
                  {t('terms')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-xs text-muted-foreground">
          {t('copyright', { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}
