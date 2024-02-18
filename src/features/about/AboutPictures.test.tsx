import { render } from '@testing-library/react/pure';
import React from 'react';
import { AboutPictures } from './AboutPictures';

describe('AboutPictures', () => {
  let underTest: any;

  beforeEach(() => {
    underTest = render(<AboutPictures />);
  });

  afterEach(() => {
    underTest.unmount();
  });

  it('should render AboutPictures component', () => {
    expect(underTest).toBeDefined();
    expect(underTest).not.toBeNull();
  });
});
