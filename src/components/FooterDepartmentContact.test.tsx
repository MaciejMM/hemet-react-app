import { render } from '@testing-library/react';
import React from 'react';
import { FooterDepartmentContact } from './FooterDepartmentContact';

describe(FooterDepartmentContact, () => {
  it('should render FooterDepartmentContact component', () => {
    const { container } = render(<FooterDepartmentContact />);
    expect(container).toBeDefined();
    expect(container).not.toBeNull();
  });
});
