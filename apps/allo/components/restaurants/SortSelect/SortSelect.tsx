'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@allo/ui';
import { useTranslations } from 'next-intl';

interface SortSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export function SortSelect({ value, onChange }: SortSelectProps) {
  const t = useTranslations('common.sortOptions');

  const sortOptions = [
    { value: 'rating', label: t('rating') },
    { value: 'delivery_time', label: t('delivery_time') },
    { value: 'delivery_fee', label: t('delivery_fee') },
    { value: 'name', label: t('name') },
  ];

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        {sortOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
