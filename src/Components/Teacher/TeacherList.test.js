import { render, screen } from '@testing-library/react';
import TeacherList from './TeacherList';

describe('Login page component', () => {
  const setup = () => render(<TeacherList />);

  test('page should have the header "våra lärare"', () => {
    setup();
    const title = screen.getByRole('heading');
    expect(title).toHaveTextContent(/våra lärare/i);
  });

});