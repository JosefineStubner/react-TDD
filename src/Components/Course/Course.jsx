import { Link } from "react-router-dom";

const Course = ({courseId, title, length, startDate, description}) => {

  return (
    <section className='section'>
			<h3>
      <Link 
        to={`/course/${courseId}`} 
        key={`${title}-${courseId}`} 
        state={{courseId, title, length, startDate, description}}
      >
        {title}
      </Link>
			</h3>
    </section>
  )
}

export default Course;