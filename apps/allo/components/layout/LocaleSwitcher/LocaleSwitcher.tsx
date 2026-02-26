'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { Button } from '@allo/ui';
import { Globe } from 'lucide-react';

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const nextLocale = locale === 'en' ? 'pt' : 'en';

  const handleSwitch = () => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleSwitch}
      title={nextLocale === 'pt' ? 'Português' : 'English'}
    >
      <Globe size={18} />
    </Button>
  );
}
