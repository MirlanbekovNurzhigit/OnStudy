import '../../../styles/pages/courses/sections/all-courses/all-courses.scss'
import Card_course from '../../../components/card-course';

function All_courses() {
	return (
		<section className="all_courses">
			<div className="container">
				<h2 className="all_courses-title">Все курсы</h2>
				<div className="row">
					<Card_course />
					<Card_course />
					<Card_course />
					<Card_course />
					<Card_course />
					<Card_course />
					<Card_course />
					<Card_course />
					<Card_course />
					<Card_course />
					<Card_course />
				</div>
			</div>
		</section>
	);
}

export default All_courses;