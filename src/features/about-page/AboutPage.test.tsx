import { render } from '@testing-library/react/pure';
import React from 'react';
import { AboutPage } from './AboutPage';

describe('AboutPage', () => {
  let underTest: any;

  beforeEach(() => {
    underTest = render(<AboutPage />);
  });

  afterEach(() => {
    underTest.unmount();
  });

  it('should render AboutCooperation component', () => {
    expect(underTest).toBeDefined();
    expect(underTest).not.toBeNull();
  });
});
