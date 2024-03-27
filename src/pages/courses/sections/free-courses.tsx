import '../../../styles/pages/courses/sections/free-courses/free-courses.scss'
import Card_course from '../../../components/card-course';

function Free_courses() {
	return (
		<section className="free_courses">
			<div className="container">
				<h2 className="free_courses-title">Бесплатные курсы</h2>
				<div className="row">
					<Card_course />
					<Card_course />
					<Card_course />
					<Card_course />
				</div>
			</div>
		</section>
	);
}

export default Free_courses;