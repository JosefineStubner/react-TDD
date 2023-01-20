import { render, screen } from '@testing-library/react';
import RegisterCourse from './RegisterCourse';

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    state: {
      courseId: "ID"
    }
  })
}));

describe('RegisterCourse component', () => {
  const setup = () => render(<RegisterCourse />);

  test('page should have a RegisterCourse button', () => {
    setup();

    const saveBtn = screen.getByRole('button', { name: 'Spara kurs'});
  
    expect(saveBtn).toBeInTheDocument();
  });

});