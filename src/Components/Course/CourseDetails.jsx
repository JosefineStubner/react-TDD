import { useLocation } from 'react-router-dom';

const CourseDetails = () => {
	const location = useLocation();
	const { courseId, title, length, startDate, description } = location.state;

	return (
		<div className="wrapper">
			<section className="container">
				<h1 className="page-title">{title}</h1>
				<div>
					<ul>
						<li>Kurs-id: {courseId}</li>
						<li>Längd {length} veckor</li>
						<li>Startdatum: {startDate}</li>
					</ul>
					<div className="details">
						<h4>Beskrivning:</h4>
						<p>{description}</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default CourseDetails;
