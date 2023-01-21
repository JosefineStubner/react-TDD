import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

const RegisterCourse = (props) => {
	const courseTitleInputRef = useRef();
	const courseLengthInputRef = useRef();
	const courseDescriptionInputRef = useRef();
	const courseStartDateInputRef = useRef();

	const onSaveHandler = (e) => {
		e.preventDefault();

		const course = {
			courseId: uuidv4(),
			title: courseTitleInputRef.current.value,
			length: courseLengthInputRef.current.value,
			description: courseDescriptionInputRef.current.value,
			startDate: courseStartDateInputRef.current.value,
		};
		props.onSave(course);
	};

	return (
		<form className='modal-form' onSubmit={onSaveHandler}>
			<div className="form-control">
				<label htmlFor="title">Kursnamn:</label>
				<input id="title" placeholder="title" ref={courseTitleInputRef} />
			</div>
			<div className="form-control">
				<label htmlFor="length">Kurslängd (veckor):</label>
				<input
					type="number"
					id="length"
					placeholder="length"
					ref={courseLengthInputRef}
				/>
			</div>
			<div className="form-control">
				<label htmlFor="description">Kursbeskrivning:</label>
				<input
        id="description"
        placeholder="description"
        ref={courseDescriptionInputRef}
        />
			</div>
			<div className="form-control">
				<label htmlFor="startDate">Startdatum</label>
				<input
          type='date'
					id="startDate"
					placeholder="startDate"
					ref={courseStartDateInputRef}
				/>
			</div>
			<div className="form-control">
				<button className="btn btn-primary">Spara kurs</button>
			</div>
		</form>
	);
};

export default RegisterCourse;
