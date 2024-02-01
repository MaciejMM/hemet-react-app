import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LinkButton } from './Button';

describe(LinkButton, () => {
  it('should render Button with included text', () => {
    const { getByText, container } = render(<LinkButton title={'Button show text'} pageLink={'/'} />);
    expect(getByText('Button show text')).toBeInTheDocument();
    expect(getByText('Button show text')).toHaveAttribute('href', '/');
    expect(getByText('Button show text')).not.toHaveAttribute('href', '/about');
    expect(getByText('Button show text')).toBeVisible();
    expect(container.firstChild).toHaveClass('hover:border-2 hover:border-hm-yellow');
  });

  it('should render Button with no border', () => {
    const { container } = render(<LinkButton title={'Button show text'} pageLink={'/'} disableBorder={true} />);
    expect(container.firstChild).not.toHaveClass('hover:border-2 hover:border-hm-yellow');
  });
});
