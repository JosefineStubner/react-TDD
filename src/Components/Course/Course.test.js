import { render, screen } from '@testing-library/react';
import Course from './Course';
import {BrowserRouter as Router} from 'react-router-dom';


describe('Course component', () => {
  const setup = () => render(<Router> <Course /></Router>);

  test('page should have a link to Course', () => {
    setup();

    const CourseLink = screen.getByRole('link');

    expect(CourseLink).toBeInTheDocument();
  });

});