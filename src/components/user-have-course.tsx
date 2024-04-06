import CardCourse from './card-course';
import '../styles/components/user-have-course/user-have-course.scss'

function UserHaveCourse() {
	return (
		<section className="users__courses">
			<div className="container">
				<h2 className="users__courses-title">Ваши курсы</h2>
				<div className="row">
					{/* <CardCourse /> */}
				</div>
			</div>
		</section>
	);
}

export default UserHaveCourse;