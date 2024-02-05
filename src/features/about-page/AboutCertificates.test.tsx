import { render } from '@testing-library/react';
import React from 'react';
import { AboutCertificates } from './AboutCertificates';

describe(AboutCertificates, () => {
  it('should render AboutCertificates component', () => {
    const { container } = render(<AboutCertificates />);
    expect(container).toBeDefined();
    expect(container).not.toBeNull();
  });
});
