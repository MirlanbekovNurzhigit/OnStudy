import '../../../styles/pages/courses/sections/users-courses/users-courses.scss'
import Card_course from '../../../components/card-course';

function Users_courses() {
	return (
		<section className="users_courses">
			<div className="container">
				<h2 className="users_courses-title">Ваши курсы</h2>
				<div className="row">

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

export default Users_courses;