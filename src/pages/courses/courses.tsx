import '../../styles/pages/courses/courses.scss'
import '../../styles/pages/courses/courses_media.css'
import All_courses from './sections/all-courses';
import Free_courses from './sections/free-courses';
import Users_courses from './sections/users-courses';


function Courses() {
	return (
		<main className="courses__main">
			<Users_courses />
			<All_courses />
			<Free_courses />
		</main>
	);
}

export default Courses;