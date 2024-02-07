import { HomeStats } from './HomeStats';
import { render } from '@testing-library/react';
import React from 'react';

describe(HomeStats, () => {
  let container: any;

  beforeEach(() => {
    container = render(<HomeStats />);
  });

  afterEach(() => {
    container.unmount();
  });
  it('should render Home stats component', () => {
    expect(container).toBeDefined();
    expect(container).not.toBeNull();
  });
});
