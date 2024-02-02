import { render } from '@testing-library/react/pure';
import React from 'react';
import { HomeContact } from './HomeContact';

describe(HomeContact, () => {
  it('should render Home contact component', () => {
    const component = render(<HomeContact />);
    expect(component).toBeDefined();
    expect(component).not.toBeNull();
  });
});
