import { render } from '@testing-library/react/pure';
import React from 'react';
import { ContactPage } from './ContactPage';
import { Breadcrumb } from '../../components/Breadcrumb';
import { HomeContact } from '../home/HomeContact';

jest.mock('../../components/Breadcrumb', () => ({
  Breadcrumb: jest.fn(() => null), // Mock Breadcrumb component
}));

jest.mock('../home/HomeContact', () => ({
  HomeContact: jest.fn(() => null), // Mock HomeContact component
}));

describe('ContactPage', () => {
  let container: any;

  beforeEach(() => {
    container = render(<ContactPage />);
  });

  afterEach(() => {
    container.unmount();
  });

  it('should render Contact Page component', () => {
    expect(Breadcrumb).toHaveBeenCalled(); // Assert Breadcrumb component usage
    expect(HomeContact).toHaveBeenCalled(); // Assert HomeContact component usage
  });
});
