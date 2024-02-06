import { render } from '@testing-library/react';
import React from 'react';
import { HomeAbout } from './HomeAbout';

describe(HomeAbout, () => {
  it('should render Home about component', () => {
    const component = render(<HomeAbout />);
    expect(component).toBeDefined();
    expect(component).not.toBeNull();
  });
});
