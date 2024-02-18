import { render } from '@testing-library/react';
import React from 'react';
import { HomeAbout } from './HomeAbout';

describe(HomeAbout, () => {
  let homeAboutComponent: any;

  beforeEach(() => {
    homeAboutComponent = render(<HomeAbout />);
  });

  afterEach(() => {
    homeAboutComponent.unmount();
  });

  it('should render Home about component', () => {
    expect(homeAboutComponent).toBeDefined();
    expect(homeAboutComponent).not.toBeNull();
  });
});
