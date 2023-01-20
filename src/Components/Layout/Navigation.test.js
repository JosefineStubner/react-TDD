import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';
import {BrowserRouter as Router} from 'react-router-dom';
import React from 'react';

describe('Navigation component', () => {
  const setup = () => render(<Router> <Navigation /></Router>);
  

  test('page should have a login link', () => {
    setup();  

    const loginLink = screen.getByRole('link', { name: 'Logga In' });

    expect(loginLink).toBeInTheDocument();
  });

  test('page should have 5 links', () => {
    setup();  

    const links = screen.getAllByRole('link');

    expect(links.length).toBe(5);
  });

});