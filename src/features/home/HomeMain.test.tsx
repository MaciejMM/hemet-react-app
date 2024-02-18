import { render } from '@testing-library/react';
import React from 'react';
import { HomeMain } from './HomeMain';

describe(HomeMain, () => {
  it('should render Home main component', () => {
    const component = render(<HomeMain />);
    expect(component).toBeDefined();
    expect(component).not.toBeNull();
  });
});
