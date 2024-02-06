import { HomeStats } from './HomeStats';
import { render } from '@testing-library/react';
import React from 'react';

describe(HomeStats, () => {
  it('should render Home stats component', () => {
    const component = render(<HomeStats />);
    expect(component).toBeDefined();
    expect(component).not.toBeNull();
  });
});
