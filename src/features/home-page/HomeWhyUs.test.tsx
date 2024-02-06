import { render } from '@testing-library/react';
import React from 'react';
import { HomeWhyUs } from './HomeWhyUs';

describe(HomeWhyUs, () => {
  it('should render Home why us component', () => {
    const component = render(<HomeWhyUs />);
    expect(component).toBeDefined();
    expect(component).not.toBeNull();
  });
});
