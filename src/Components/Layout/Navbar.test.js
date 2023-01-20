import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import {BrowserRouter as Router} from 'react-router-dom';


describe('Navbar component', () => {
  const setup = () => render(<Router> <Navbar /></Router>);

  test('page should have a heading', () => {
    setup();

    const NavbarLink = screen.getByRole('heading');

    expect(NavbarLink).toBeInTheDocument();
  });

  test('page should have a heading with expeted text', () => {
    setup();

    const NavbarLink = screen.getByRole('heading');

    expect(NavbarLink).toHaveTextContent('Westcoast Education');
  });
});