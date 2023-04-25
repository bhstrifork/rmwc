import React from 'react';
import { renderToString as mount } from 'react-dom/server';
import { describe, it, expect } from 'vitest';
import { Portal } from './';

describe('Base SSR', () => {
  it('renders', () => {
    const portal = mount(<Portal />);
    expect(portal).toMatchSnapshot();
  });
});
