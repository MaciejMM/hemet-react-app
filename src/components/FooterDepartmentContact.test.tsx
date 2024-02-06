import { render, screen } from '@testing-library/react';
import React from 'react';
import { FooterDepartmentContact } from './FooterDepartmentContact';

describe(FooterDepartmentContact, () => {
  it('should render FooterDepartmentContact component', () => {
    const { container } = render(<FooterDepartmentContact />);
    expect(container).toBeDefined();
    expect(container).not.toBeNull();
  });

  it('should render component with proper values', () => {
    render(<FooterDepartmentContact />);
    const userDepartment1 = screen.getByTestId('userDepartment-0');
    const userName1 = screen.getByTestId('userName-0');
    const userEmailTo1 = screen.getByTestId('userEmailTo-0');
    const userPhoneText1 = screen.getByTestId('userPhoneText-0');

    expect(userDepartment1.textContent).toBe('Dział handlowy');
    expect(userName1.textContent).toBe('Aleksandra Daros');
    expect(userEmailTo1.textContent).toBe('aleksandra.daros@hemet.hg.pl');
    expect(userEmailTo1.getAttribute('href')).toBe('mailto:aleksandra.daros@hemet.hg.pl');
    expect(userPhoneText1.textContent).toBe('+48 600 432 556');
    expect(userPhoneText1.getAttribute('href')).toBe('tel:+48600432556');

    const userDepartment2 = screen.getByTestId('userDepartment-1');
    const userName2 = screen.getByTestId('userName-1');
    const userEmailTo2 = screen.getByTestId('userEmailTo-1');
    const userPhoneText2 = screen.getByTestId('userPhoneText-1');

    expect(userDepartment2.textContent).toBe('Dział techniczny');
    expect(userName2.textContent).toBe('inż. Ryszard Graf');
    expect(userEmailTo2.textContent).toBe('ryszard.graf@hemet.hg.pl');
    expect(userEmailTo2.getAttribute('href')).toBe('mailto:ryszard.graf@hemet.hg.pl');
    expect(userPhoneText2.textContent).toBe('+48 664 936 374');
    expect(userPhoneText2.getAttribute('href')).toBe('tel:+48664936374');

    const userDepartment3 = screen.getByTestId('userDepartment-2');
    const userName3 = screen.getByTestId('userName-2');
    const userEmailTo3 = screen.getByTestId('userEmailTo-2');
    const userPhoneText3 = screen.getByTestId('userPhoneText-2');

    expect(userDepartment3.textContent).toBe('Dział techniczno-handlowy');
    expect(userName3.textContent).toBe('inż. Tomasz Zapłata');
    expect(userEmailTo3.textContent).toBe('tomasz.zaplata@hemet.hg.pl');
    expect(userEmailTo3.getAttribute('href')).toBe('mailto:tomasz.zaplata@hemet.hg.pl');
    expect(userPhoneText3.textContent).toBe('+48 882 145 891');
    expect(userPhoneText3.getAttribute('href')).toBe('tel:+48882145891');
  });
});
