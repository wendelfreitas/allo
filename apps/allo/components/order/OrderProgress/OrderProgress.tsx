'use client';

import {
  Check,
  Clock,
  ChefHat,
  Package,
  Bike,
  PartyPopper,
} from 'lucide-react';
import { motion } from 'framer-motion';
import type { OrderStatus } from '../../../app/api/_data/types';

interface OrderProgressProps {
  status: OrderStatus;
}

const steps: { status: OrderStatus; label: string; icon: typeof Check }[] = [
  { status: 'confirmed', label: 'Confirmed', icon: Clock },
  { status: 'preparing', label: 'Preparing', icon: ChefHat },
  { status: 'ready', label: 'Ready', icon: Package },
  { status: 'out_for_delivery', label: 'On the way', icon: Bike },
  { status: 'delivered', label: 'Delivered', icon: PartyPopper },
];

const STATUS_ORDER: OrderStatus[] = [
  'confirmed',
  'preparing',
  'ready',
  'out_for_delivery',
  'delivered',
];

export function OrderProgress({ status }: OrderProgressProps) {
  const currentIndex = STATUS_ORDER.indexOf(status);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        {steps.map((step, i) => {
          const isCompleted = i <= currentIndex;
          const isCurrent = i === currentIndex;
          const Icon = step.icon;

          return (
            <div key={step.status} className="flex flex-1 items-center">
              <div className="flex flex-col items-center">
                <motion.div
                  initial={false}
                  animate={{
                    scale: isCurrent ? 1.15 : 1,
                    backgroundColor: isCompleted
                      ? 'hsl(8 100% 67%)'
                      : 'hsl(0 0% 18%)',
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full"
                >
                  {isCompleted && i < currentIndex ? (
                    <Check size={18} className="text-white" />
                  ) : (
                    <Icon
                      size={18}
                      className={
                        isCompleted ? 'text-white' : 'text-muted-foreground'
                      }
                    />
                  )}
                </motion.div>
                <span
                  className={`mt-2 text-xs font-medium ${
                    isCurrent
                      ? 'text-primary'
                      : isCompleted
                        ? 'text-foreground'
                        : 'text-muted-foreground'
                  }`}
                >
                  {step.label}
                </span>
              </div>

              {i < steps.length - 1 && (
                <div className="mx-2 h-0.5 flex-1 rounded-full bg-muted">
                  <motion.div
                    initial={false}
                    animate={{ width: i < currentIndex ? '100%' : '0%' }}
                    transition={{ duration: 0.5 }}
                    className="h-full rounded-full bg-primary"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
