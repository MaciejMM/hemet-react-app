import { render } from '@testing-library/react';
import React from 'react';
import { HomePage } from './HomePage';

describe(HomePage, () => {
  it('should render Home page component', () => {
    const component = render(<HomePage />);
    expect(component).toBeDefined();
    expect(component).not.toBeNull();
  });
});
