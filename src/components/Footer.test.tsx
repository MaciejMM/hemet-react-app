import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Footer } from './Footer';

describe(Footer, () => {
  it('should render footer with 3 emails', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('tomasz.zaplata@hemet.hg.pl')).toBeInTheDocument();
    expect(getByText('aleksandra.daros@hemet.hg.pl')).toBeInTheDocument();
    expect(getByText('hemet@hemet.hg.pl')).toBeInTheDocument();
  });
});
