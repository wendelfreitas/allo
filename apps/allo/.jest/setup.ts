import '@testing-library/jest-dom';
import '@testing-library/jest-dom/jest-globals';
import ResizeObserver from 'resize-observer-polyfill';
global.ResizeObserver = ResizeObserver;

const originalConsoleError = console.error;
console.error = (...args: unknown[]) => {
  const message = typeof args[0] === 'string' ? args[0] : '';
  if (message.includes('inside a test was not wrapped in act(')) return;
  if (message.includes('not configured to support act(')) return;
  originalConsoleError(...args);
};

// Load English messages for test mocking
import commonMessages from '../messages/en/common.json';
import homeMessages from '../messages/en/home.json';
import restaurantsMessages from '../messages/en/restaurants.json';
import restaurantMessages from '../messages/en/restaurant.json';
import checkoutMessages from '../messages/en/checkout.json';
import orderMessages from '../messages/en/order.json';
import cartMessages from '../messages/en/cart.json';

const allMessages: Record<string, unknown> = {
  ...commonMessages,
  ...homeMessages,
  ...restaurantsMessages,
  ...restaurantMessages,
  ...checkoutMessages,
  ...orderMessages,
  ...cartMessages,
};

function getNestedValue(obj: unknown, path: string): string {
  const keys = path.split('.');
  let current: unknown = obj;
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = (current as Record<string, unknown>)[key];
    } else {
      return path;
    }
  }
  return typeof current === 'string' ? current : path;
}

// Mock next-intl
jest.mock('next-intl', () => ({
  useTranslations: (namespace?: string) => {
    const t = (key: string, params?: Record<string, unknown>) => {
      const fullKey = namespace ? `${namespace}.${key}` : key;
      let value = getNestedValue(allMessages, fullKey);
      if (params) {
        Object.entries(params).forEach(([k, v]) => {
          value = value.replace(`{${k}}`, String(v));
        });
      }
      return value;
    };
    return t;
  },
  useLocale: () => 'en',
  NextIntlClientProvider: ({ children }: { children: React.ReactNode }) => children,
}));

// Mock @/i18n/navigation
jest.mock('@/i18n/navigation', () => ({
  Link: ({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: unknown }) => {
    const React = require('react');
    return React.createElement('a', { href, ...props }, children);
  },
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
  }),
  usePathname: () => '/',
  redirect: jest.fn(),
  getPathname: jest.fn(),
}));
