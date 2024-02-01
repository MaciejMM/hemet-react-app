import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PageTitle } from './PageTitle';

describe(PageTitle, () => {
  it('should render page title with custom title', () => {
    render(<PageTitle title={'Title for testing'} />);
    const linkElement = screen.getByText('Title for testing');
    expect(linkElement).toBeDefined();
    expect(linkElement).not.toBeNull();
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toBeVisible();
  });

  it('should render page title with white background', () => {
    render(<PageTitle title={'Title for testing'} color={'white'} />);
    const { container } = render(<PageTitle title={'Title for testing'} color={'white'} />);
    expect(container.firstChild).toHaveClass('text-white');
    expect(container.firstChild).toHaveClass('py-12 xl:py-18');
    expect(container.firstChild).not.toHaveClass('pb-12 xl:pb-18');
  });

  it('should render page title without top padding', () => {
    const { container } = render(<PageTitle title={'Title for testing'} color={'white'} disablePaddingTop={true} />);
    expect(container.firstChild).toHaveClass('text-white');
    expect(container.firstChild).not.toHaveClass('py-12 xl:py-18');
    expect(container.firstChild).toHaveClass('pb-12 xl:pb-18');
  });
});
