import React from 'react';
import { Breadcrumb } from './Breadcrumb';
import { render, screen } from '@testing-library/react';

describe(Breadcrumb, () => {
  it('should render breadcrumb', () => {
    const breadcrumbTitle = 'Test file';
    render(<Breadcrumb title={breadcrumbTitle} />);
    expect(screen.getByText(breadcrumbTitle)).not.toBeNull();
    expect(screen).toBeDefined();
  });
});
