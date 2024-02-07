import { render } from '@testing-library/react';
import React from 'react';
import { HomeServices } from './HomeServices';

describe(HomeServices, () => {

  let underTest: any;

  beforeEach(() => {
    underTest = render(<HomeServices />);
  });

  afterEach(() => {
    underTest.unmount();
  });

  it('should render Home services component', () => {
    expect(underTest).toBeDefined();
    expect(underTest).not.toBeNull();
  });
});
