import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LinkButton } from './Button';

describe('LinkButton', () => {
  let container: any;

  beforeEach(() => {
    container = render(<LinkButton title={'Button show text'} pageLink={'/'} disableBorder={true} />);
  });

  afterEach(() => {
    container.unmount();
  });

  it('should render Button with included text', () => {
    expect(container.getByText('Button show text')).toBeInTheDocument();
    expect(container.getByText('Button show text')).toHaveAttribute('href', '/');
    expect(container.getByText('Button show text')).not.toHaveAttribute('href', '/about');
    expect(container.getByText('Button show text')).toBeVisible();
  });

  it('should render Button with no border', () => {
    expect(container.getByText('Button show text')).not.toHaveClass('hover:border-2 hover:border-hm-yellow');
  });
});
