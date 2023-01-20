import { render, screen } from '@testing-library/react';
import CourseDetails from './CourseDetails';

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    state: {
      courseId: "ID"
    }
  })
}));

describe('Teacher details component', () => {
  const setup = () => render(<CourseDetails />);

  test('page should have a course ID', () => {
    setup();

    const listItems = screen.getAllByRole('listitem');
    const courseLi = listItems[0];

    expect(courseLi).toBeInTheDocument();
    expect(courseLi).toHaveTextContent("Kurs-id: ID");
  });

});