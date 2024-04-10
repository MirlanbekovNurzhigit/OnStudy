import CardCourse from '../../components/card-course';
import TypeCourse from '../../type/courses';
import '../../styles/pages/courses/courses.scss';

interface CoursesProps {
	data: TypeCourse[];
}

function Courses({ data }: CoursesProps) {
	const freeCourses = data.filter((course) => course.price === 'Free' || course.price === 'Бесплатно');
	const paidCourses = data.filter((course) => course.price !== 'Free' && course.price !== 'Бесплатно');

	return (
		<main className="courses">
			<section className="all__courses">
				<div className="container">
					<h2 className="all__courses-title">Все курсы</h2>
					<div className="row">
						{paidCourses.map((course) => (
							<CardCourse key={course.id} course={course} />
						))}
					</div>
				</div>
			</section>
			<section className="free__courses">
				<div className="container">
					<h2 className="free__courses-title">Бесплатные курсы</h2>
					<div className="row">
						{freeCourses.map((course) => (
							<CardCourse key={course.id} course={course} />
						))}
					</div>
				</div>
			</section>
		</main>
	);
}

export default Courses;
