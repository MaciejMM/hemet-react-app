import { render } from '@testing-library/react';
import React from 'react';
import { HomeWhyUs } from './HomeWhyUs';

describe(HomeWhyUs, () => {
  let container: any;

  beforeEach(() => {
    container = render(<HomeWhyUs />);
  });

  afterEach(() => {
    container.unmount();
  });

  it('should render Home why us component', () => {
    expect(container).toBeDefined();
    expect(container).not.toBeNull();
  });
});
