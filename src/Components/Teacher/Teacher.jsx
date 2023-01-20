import { Link } from "react-router-dom";

const Teacher = ({ teacherId, firstName, lastName, personalNumber, email, phone, competencies}) => {

  return (
    <section className='section'>
			<h3>
      <Link 
        to={`/teacher/${teacherId}`} 
        key={`${firstName}-${teacherId}`} 
        state={{teacherId, firstName, lastName, personalNumber, email, phone, competencies}}
      >
        {firstName} {lastName}
      </Link>
			</h3>
    </section>
  )
}

export default Teacher;