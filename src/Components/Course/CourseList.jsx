import { useEffect, useState, useContext } from 'react';

import AuthContext from '../Store/auth_context';
import Modal from '../UI/Modal';

import Button from '../UI/Button';
import Course from './Course';
import RegisterCourse from './RegisterCourse';

const CourseList = () => {
	const [courses, setCourses] = useState([]);
	const [showModal, setShowModal] = useState(false);

	const context = useContext(AuthContext);

	useEffect(() => {
		loadCourses();
	}, []);

	const loadCourses = () => {
		fetch('http://localhost:3010/courses')
			.then((response) => response.json())
			.then((data) => setCourses(data));
	};

	const ShowRegisterCourseHandler = () => {
		setShowModal(true);
	};

	const onSaveHandler = async (course) => {
		console.log(course);

		const result = await fetch('http://localhost:3010/courses', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(course),
		});

		if (result.status === 201) {
			loadCourses();
			setShowModal(false);
		}
	};

	return (
		<>
			{showModal && (
				<Modal title="Add new course">
					<RegisterCourse onSave={onSaveHandler} />
				</Modal>
			)}
			<section data-testid="course-list-component" className="container">
				<h1 className="page-title">Kurser vi erbjuder:</h1>
        {courses.map((course, i) => {
          return(
            <Course 
              data-testid='course'
              key={i}
              courseId={course.courseId}
              title={course.title}
              length={course.length}
              startDate={course.startDate}
              description={course.description}
            />
          )
        })}
        <br/>
				{context.isLoggedIn && (
				<Button onClick={ShowRegisterCourseHandler}>Lägg till kurs!</Button>
				)}
			</section>
		</>
	);
};

export default CourseList;