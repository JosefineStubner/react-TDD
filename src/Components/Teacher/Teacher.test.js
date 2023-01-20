import { render, screen } from '@testing-library/react';
import Teacher from './Teacher';
import {BrowserRouter as Router} from 'react-router-dom';


describe('Teacher component', () => {
  const setup = () => render(<Router> <Teacher /></Router>);

  test('page should have a link to teachId', () => {
    setup();

    const teacherLink = screen.getByRole('link');

    expect(teacherLink).toBeInTheDocument();
  });

});