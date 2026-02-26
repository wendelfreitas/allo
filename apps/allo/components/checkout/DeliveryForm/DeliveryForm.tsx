'use client';

import { Input, Label } from '@allo/ui';
import { useTranslations } from 'next-intl';

interface DeliveryFormProps {
  address: string;
  onAddressChange: (address: string) => void;
  instructions: string;
  onInstructionsChange: (instructions: string) => void;
}

export function DeliveryForm({
  address,
  onAddressChange,
  instructions,
  onInstructionsChange,
}: DeliveryFormProps) {
  const t = useTranslations('checkout');

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">{t('deliveryAddress')}</h2>
      <div className="space-y-3">
        <div>
          <Label htmlFor="address">{t('streetAddress')}</Label>
          <Input
            id="address"
            placeholder={t('addressPlaceholder')}
            value={address}
            onChange={(e) => onAddressChange(e.target.value)}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="instructions">{t('deliveryInstructions')}</Label>
          <Input
            id="instructions"
            placeholder={t('instructionsPlaceholder')}
            value={instructions}
            onChange={(e) => onInstructionsChange(e.target.value)}
            className="mt-1"
          />
        </div>
      </div>
    </div>
  );
}
