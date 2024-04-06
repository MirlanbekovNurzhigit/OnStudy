import '../../../styles/pages/home/sections/popular-courses/popular-courses.scss'
import '../../../styles/pages/home/sections/popular-courses/popular-courses_media.css'
import CoursesCard from '../../../components/card-course'

function Popular_courses() {
	return (
		<section className="popular__courses">
			<div className="container">

				<div className="popular__courses-text-content">
					<h2 className="popular__courses-title">Популярные курсы</h2>
					<p className="popular__courses-text">
						Готовы совершить прыжок в мир обучения нового века? Не ждите, первый курс за наш счет!
					</p>
				</div>
				<div className="row">
					{/* <CoursesCard />
					<CoursesCard />
					<CoursesCard />
					<CoursesCard /> */}
				</div>
			</div>
		</section>
	);
}

export default Popular_courses;