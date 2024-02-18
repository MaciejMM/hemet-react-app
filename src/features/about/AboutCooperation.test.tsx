import { render } from '@testing-library/react/pure';
import React from 'react';
import { AboutCooperation } from './AboutCooperation';

describe('AboutCooperation', () => {
  let underTest: any;

  beforeEach(() => {
    underTest = render(<AboutCooperation />);
  });

  afterEach(() => {
    underTest.unmount();
  });

  it('should render AboutCooperation component', () => {
    expect(underTest).toBeDefined();
    expect(underTest).not.toBeNull();
  });
});
