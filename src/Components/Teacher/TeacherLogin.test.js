import { render, screen } from '@testing-library/react';
import TeacherLogin from './TeacherLogin';

describe('Login page component', () => {
  const setup = () => render(<TeacherLogin />);

  test('page should have username/email input fields', () => {
    setup();
    const userInput = screen.getByLabelText('Användarnamn');
    expect(userInput).toBeInTheDocument();
  });

  test('there should be a password input of type password', () => {
    setup();
    const password = screen.getByLabelText('Lösenord');
    expect(password).toBeInTheDocument();
    expect(password.type).toBe('password');
  });

  test('login button should be disabled if fields are not filled out', () => {
    setup();
    const loginBtn = screen.getByRole('button', { name: /Login/i});
    expect(loginBtn).toBeInTheDocument();
    expect(loginBtn).toBeDisabled();
  });

});