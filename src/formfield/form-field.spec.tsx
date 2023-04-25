import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FormField } from './';

describe('FormField', () => {
  test('renders', () => {
    const { asFragment } = render(
      <FormField>
        <input type="checkbox" id="input" />
        <label htmlFor="input">Input Label</label>
      </FormField>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
