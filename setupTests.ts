import React from 'react';
// @ts-ignore
import '@testing-library/jest-dom/extend-expect';
import { vi } from 'vitest';
import rmwcTestPolyfill from './packages/base/src/lib/test-polyfill';

Object.defineProperty(global, 'crypto', {
  value: {
    randomUUID: () => 123456
  }
});

rmwcTestPolyfill();

const consoleError = console.error;
beforeAll(() => {
  vi.spyOn(console, 'error').mockImplementation((...args) => {
    if (
      !(
        typeof args[0] === 'string' &&
        args[0].includes(
          'Warning: An update to %s inside a test was not wrapped in act'
        )
      )
    ) {
      consoleError(...args);
    }
  });
});
