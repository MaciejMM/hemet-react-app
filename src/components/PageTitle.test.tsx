import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PageTitle } from './PageTitle';

describe('PageTitle', () => {
  let underTest: any;

  beforeEach(() => {
    underTest = render(<PageTitle title={'Title for testing'} color={'white'} disablePaddingTop={true} />);
  });

  afterEach(() => {
    underTest.unmount();
  });

  it('should render page title with custom title', () => {
    expect(underTest.getByText('Title for testing')).toBeDefined();
    expect(underTest.getByText('Title for testing')).not.toBeNull();
    expect(underTest.getByText('Title for testing')).toBeVisible();
  });

  it('should render page title with white background', () => {
    expect(underTest.getByText('Title for testing')).toHaveClass('text-white');
    expect(underTest.getByText('Title for testing')).toHaveClass('pb-12 xl:pb-18');
  });

  it('should render page title without top padding', () => {
    expect(underTest.getByText('Title for testing')).toHaveClass('text-white');
    expect(underTest.getByText('Title for testing')).not.toHaveClass('py-12 xl:py-18');
    expect(underTest.getByText('Title for testing')).toHaveClass('pb-12 xl:pb-18');
  });
});
