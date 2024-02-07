import React from 'react';
import { Breadcrumb } from './Breadcrumb';
import { render } from '@testing-library/react';

describe('Breadcrumb', () => {
  let container: any;
  const breadcrumbTitle = 'Test file';

  beforeEach(() => {
    container = render(<Breadcrumb title={breadcrumbTitle} />);
  });

  afterEach(() => {
    container.unmount();
  });

  it('should render breadcrumb', () => {
    expect(container.getByText(breadcrumbTitle)).not.toBeNull();
    expect(container.getByText(breadcrumbTitle)).toBeDefined();
  });
});
