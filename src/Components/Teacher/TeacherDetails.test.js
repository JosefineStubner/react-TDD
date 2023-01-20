import { render, screen } from '@testing-library/react';
import TeacherDetails from './TeacherDetails';

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    state: {
      teacherId: "ID"
    }
  })
}));

describe('Teacher details component', () => {
  const setup = () => render(<TeacherDetails />);

  test('page should have a teacher ID', () => {
    setup();

    const listItems = screen.getAllByRole('listitem');
    const teacherLi = listItems[0];

    expect(teacherLi).toBeInTheDocument();
    expect(teacherLi).toHaveTextContent("Lärar-id: ID");
  });

});