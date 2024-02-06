import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Footer } from './Footer';

describe(Footer, () => {
  it('should render footer with 3 emails', () => {
    render(<Footer />);
    expect(screen.getByText('tomasz.zaplata@hemet.hg.pl')).toBeInTheDocument();
    expect(screen.getByText('aleksandra.daros@hemet.hg.pl')).toBeInTheDocument();
    expect(screen.getByText('hemet@hemet.hg.pl')).toBeInTheDocument();
    expect(screen.getByTestId('footer-id')).not.toBeNull();
    expect(screen.getByTestId('footer-id')).toBeInTheDocument();
  });
});
