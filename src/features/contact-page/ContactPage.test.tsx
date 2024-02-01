import { render } from '@testing-library/react';
import React from 'react';
import { ContactPage } from './ContactPage';

describe(ContactPage, () => {
  it('should render Contact Page component', () => {
    const { container } = render(<ContactPage />);

    expect(container).toBeDefined();
    expect(container).not.toBeNull();
  });
});
