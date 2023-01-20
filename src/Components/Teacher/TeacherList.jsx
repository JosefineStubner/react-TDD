import { useEffect, useState } from 'react';
import Teacher from './Teacher';

const TeacherList = () => {
	const [teachers, setTeachers] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3010/teachers')
			.then((response) => response.json())
			.then((data) => setTeachers(data));
	}, []);
	
	return (
		<section data-testid="teacher-list-component" className="container">
			<h1 className="page-title">Våra lärare</h1>
				{teachers.map((teacher, i) => {
						console.log(teachers);
						return (
							<Teacher 
							data-testid='teacher'
							key={i}
							teacherId={teacher.teacherId}
							firstName={teacher.firstName}
							lastName={teacher.lastName}
							personalNumber={teacher.personalNumber}
							email={teacher.email}
							phone={teacher.phone}
							competencies={teacher.competencies}
						/>
						);
					})}
		</section>
	);
};

export default TeacherList;


// {teachers.map((teacher, i) => {
// 	return(
		// <Teacher 
		// 	data-testid='teacher'
		// 	key={i}
		// 	teacherId={teacher.teacherId}
		// 	firstName={teacher.title}
		// 	lastName={teacher.length}
		// 	personalNumber={teacher.personalNumber}
		// 	email={teacher.email}
		// 	phone={teacher.phone}
		// 	competencies={teacher.competencies}
		// />
// 	)
// })}
