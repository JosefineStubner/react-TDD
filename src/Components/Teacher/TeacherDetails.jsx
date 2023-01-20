import { useLocation } from 'react-router-dom';

const TeacherDetails = () => {
	const location = useLocation();
	const {
		teacherId,
		firstName,
		lastName,
		personalNumber,
		email,
		phone,
		competencies,
	} = location.state;

	return (
		<div className="wrapper">
			<section className="container">
				<h1 className="page-title">
					{firstName} {lastName}
				</h1>
				<div>
					<ul>
						<li>Lärar-id: {teacherId}</li>
						<li>Personnummer: {personalNumber}</li>
						<li>Email: {email}</li>
						<li>Telefon: {phone}</li>
					</ul>
					<div className="details">
						<h4>Kompetenser:</h4>
						<p>{competencies}</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default TeacherDetails;
