import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FloatingLabel } from './';

describe('FloatingLabel', () => {
  it('renders', () => {
    const { asFragment } = render(<FloatingLabel />);
    expect(asFragment()).toMatchSnapshot();
  });
});
