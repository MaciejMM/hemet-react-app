import { render } from '@testing-library/react';
import React from 'react';
import { HomeServices } from './HomeServices';

describe(HomeServices, () => {
  it('should render Home services component', () => {
    const component = render(<HomeServices />);
    expect(component).toBeDefined();
    expect(component).not.toBeNull();
  });
});
