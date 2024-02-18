import { render, screen } from '@testing-library/react';
import React from 'react';
import { ProjectCard } from './ProjectCard';

describe(ProjectCard, () => {
  it('should render project card component', () => {
    const cardDetails = {
      client: 'Coccodrillo',
      city: 'Pianowo',
      img: 'images/projects/siedziba_CDRL.webp',
    };

    render(<ProjectCard cardDetails={cardDetails} index={0} />);

    const client = screen.getByTestId('client');
    const city = screen.getByTestId('city');
    const img = screen.getByTestId('img');

    expect(client.textContent).toBe('Coccodrillo');
    expect(client).toBeDefined();
    expect(client).not.toBeNull();

    expect(city.textContent).toBe('Pianowo');
    expect(city).toBeDefined();
    expect(city).not.toBeNull();
    
    expect(img.getAttribute('src')).toBe('images/projects/siedziba_CDRL.webp');
    expect(img).toBeDefined();
    expect(img).not.toBeNull();
  });
});
