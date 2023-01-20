import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './Components/Store/auth_context';
import Navbar from './Components/Layout/Navbar';

import CourseList from './Components/Course/CourseList';
import CourseDetails from './Components/Course/CourseDetails';
import RegisterTeacher from './Components/Teacher/RegisterTeacher';
import TeacherDetails from './Components/Teacher/TeacherDetails';
import TeacherList from './Components/Teacher/TeacherList';
import TeacherLogin from './Components/Teacher/TeacherLogin';

function App() {
	return (
		<Router>
			<AuthContextProvider>
			<header>
				<Navbar />
			</header>
			<main>
				<Routes>
					<Route path="/" element={<CourseList />} />
					<Route path="/courses" element={<CourseList />} />
          <Route path='/course/:courseId' element={<CourseDetails />} />
					<Route path="/teachers" element={<TeacherList />} />
          <Route path='/teacher/:teacherId' element={<TeacherDetails />} />
					<Route path="/registerteacher" element={<RegisterTeacher />} />
					<Route path="/login" element={<TeacherLogin />} />
				</Routes>
			</main>
			</AuthContextProvider>
		</Router>
	);
}

export default App;
