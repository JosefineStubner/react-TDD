import { render, screen } from '@testing-library/react';
import CourseList from './CourseList';


describe('CourseList component', () => {
  const setup = () => render(<CourseList />);

  test('page should have a CourseHeader', () => {
    setup();

    const h1 = screen.getByRole('heading');
  
    expect(h1).toBeInTheDocument();
    expect(h1).toHaveTextContent('Kurser vi erbjuder:')
  });

  test('page should have a CourseHeader with expected text', () => {
    setup();

    const h1 = screen.getByRole('heading');
  
    expect(h1).toBeInTheDocument();
  });
});