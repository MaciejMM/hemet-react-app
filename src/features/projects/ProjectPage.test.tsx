import { render } from '@testing-library/react';
import React from 'react';
import { ProjectPage } from './ProjectPage';
import { Breadcrumb } from '../../components/Breadcrumb';
import { ProjectCard } from './ProjectCard';

jest.mock('../../components/Breadcrumb', () => ({
  Breadcrumb: jest.fn(() => null), // Mock HomeContact component
}));
jest.mock('./ProjectCard', () => ({
  ProjectCard: jest.fn(() => null), // Mock HomeContact component
}));

describe('ProjectPage', () => {
  it('should render Project Page component', () => {
    render(<ProjectPage />);
    expect(Breadcrumb).toHaveBeenCalled(); // Assert Breadcrumb component usage
    expect(ProjectCard).toHaveBeenCalled(); // Assert HomeContact component usage
  });
});
