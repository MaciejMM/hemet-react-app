import { render } from '@testing-library/react';
import React from 'react';
import { HomePage } from './HomePage';
import { HomeContact } from './HomeContact';
import { HomeAbout } from './HomeAbout';
import { HomeWhyUs } from './HomeWhyUs';
import { HomeServices } from './HomeServices';
import { HomeMain } from './HomeMain';
import { HomeStats } from './HomeStats';

jest.mock('./HomeMain', () => ({
  HomeMain: jest.fn(() => null), // Mock Breadcrumb component
}));

jest.mock('./HomeContact', () => ({
  HomeContact: jest.fn(() => null), // Mock HomeContact component
}));

jest.mock('./HomeServices', () => ({
  HomeServices: jest.fn(() => null), // Mock HomeContact component
}));
jest.mock('./HomeWhyUs', () => ({
  HomeWhyUs: jest.fn(() => null), // Mock HomeContact component
}));
jest.mock('./HomeAbout', () => ({
  HomeAbout: jest.fn(() => null), // Mock HomeContact component
}));
jest.mock('./HomeStats', () => ({
  HomeStats: jest.fn(() => null), // Mock HomeContact component
}));

describe('HomePage', () => {
  it('should render Home page component', () => {
    render(<HomePage />);
    expect(HomeMain).toHaveBeenCalled(); // Assert Breadcrumb component usage
    expect(HomeContact).toHaveBeenCalled(); // Assert HomeContact component usage
    expect(HomeServices).toHaveBeenCalled(); // Assert HomeContact component usage
    expect(HomeWhyUs).toHaveBeenCalled(); // Assert HomeContact component usage
    expect(HomeAbout).toHaveBeenCalled(); // Assert HomeContact component usage
    expect(HomeStats).toHaveBeenCalled(); // Assert HomeContact component usage
  });
});
