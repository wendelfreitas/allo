'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { motion } from 'framer-motion';

interface MobileNavProps {
  onClose: () => void;
}

export function MobileNav({ onClose }: MobileNavProps) {
  const t = useTranslations('common');

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="border-t border-border/50 bg-background md:hidden"
    >
      <div className="space-y-1 px-4 py-4">
        <Link
          href="/restaurants"
          onClick={onClose}
          className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          {t('navbar.restaurants')}
        </Link>
      </div>
    </motion.div>
  );
}
