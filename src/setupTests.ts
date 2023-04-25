import React from 'react';
// @ts-ignore
import rmwcTestPolyfill from './base/test-polyfill';
import '@testing-library/jest-dom/extend-expect';
import { beforeAll, expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

rmwcTestPolyfill();

const consoleError = console.error;
beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation((...args) => {
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

afterEach(() => {
  cleanup();
});
