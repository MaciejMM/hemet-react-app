import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { HomeContact } from './HomeContact';

describe(HomeContact, () => {
  let underTest: any;

  beforeEach(() => {
    underTest = render(<HomeContact />);
  });

  afterEach(() => {
    underTest.unmount();
  });

  it('should render Home contact component', () => {
    expect(underTest).toBeDefined();
    expect(underTest).not.toBeNull();
  });

  it('should render proper contact details', () => {
    const phoneLink = underTest.getByTestId('phone');
    const emailLink = underTest.getByTestId('mailTo');

    expect(emailLink.textContent).toBe('hemet@hemet.hg.pl');
    expect(emailLink.getAttribute('href')).toBe('mailto:hemet@hemet.hg.pl');
    expect(phoneLink.textContent).toBe('+48 655 120 722');
    expect(phoneLink.getAttribute('href')).toBe('tel:+48655120722');
  });
});
