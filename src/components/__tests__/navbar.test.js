import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../Navbar';

describe('Navbar', () => {
  test('renders the Navbar component with links', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole('link', { name: /home/i });
    const calculatorLink = screen.getByRole('link', { name: /calculator/i });
    const quoteLink = screen.getByRole('link', { name: /quote/i });

    expect(homeLink).toBeInTheDocument();
    expect(calculatorLink).toBeInTheDocument();
    expect(quoteLink).toBeInTheDocument();
  });
});
