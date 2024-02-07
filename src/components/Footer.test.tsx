import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Footer } from './Footer';
import { FooterDepartmentContact } from './FooterDepartmentContact';

jest.mock('./FooterDepartmentContact', () => ({
  FooterDepartmentContact: jest.fn(() => null), // Mock HomeContact component
}));

describe('Footer', () => {
  let underTest: any;

  beforeEach(() => {
    underTest = render(<Footer />);
  });

  afterEach(() => {
    underTest.unmount();
  });

  it('should render footer with 3 emails', () => {
    expect(underTest.getByText('Biuro / Zakład produkcyjny')).toBeInTheDocument();
    expect(underTest.getByText('Adres')).toBeInTheDocument();
    expect(underTest.getByText('Linki')).toBeInTheDocument();
  });

  it('should call FooterDepartmentContact', () => {
    expect(FooterDepartmentContact).toHaveBeenCalled();
  });
});
