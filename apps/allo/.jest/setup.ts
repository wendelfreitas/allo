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
