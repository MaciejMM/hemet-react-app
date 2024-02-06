import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { HomeContact } from './HomeContact';

describe(HomeContact, () => {
  it('should render Home contact component', () => {
    const component = render(<HomeContact />);
    expect(component).toBeDefined();
    expect(component).not.toBeNull();
    expect(screen.getByTestId('home-contact')).toBeInTheDocument();
  });

  it('should render proper contact details', () => {
    render(<HomeContact />);
    const phoneLink = screen.getByTestId('phone');
    const emailLink = screen.getByTestId('mailTo');

    expect(emailLink.textContent).toBe('hemet@hemet.hg.pl');
    expect(emailLink.getAttribute('href')).toBe('mailto:hemet@hemet.hg.pl');
    expect(phoneLink.textContent).toBe('+48 655 120 722');
    expect(phoneLink.getAttribute('href')).toBe('tel:+48655120722');
  });
});
