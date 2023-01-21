import { render, screen } from '@testing-library/react';
import RegisterTeacher from './RegisterTeacher';
import {BrowserRouter as Router} from 'react-router-dom';


describe('RegisterTeacher component', () => {
  const setup = () => render(<Router> <RegisterTeacher /></Router>);

  test('page should have a heading', () => {
    setup();

    const RegisterTeacherLink = screen.getByRole('heading');

    expect(RegisterTeacherLink).toBeInTheDocument();
  });

  test('page should have a heading with expected text', () => {
    setup();

    const RegisterTeacherLink = screen.getByRole('heading');

    expect(RegisterTeacherLink).toHaveTextContent('Registrering av lärare');
  });
});