import { render } from '@testing-library/react';
import React from 'react';
import { AboutCertificates } from './AboutCertificates';

describe(AboutCertificates, () => {
  let underTest: any;

  beforeEach(() => {
    underTest = render(<AboutCertificates />);
  });

  afterEach(() => {
    underTest.unmount();
  });
  it('should render AboutCertificates component', () => {
    expect(underTest).toBeDefined();
    expect(underTest).not.toBeNull();
  });
});
