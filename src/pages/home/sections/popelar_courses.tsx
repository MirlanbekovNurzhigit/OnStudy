import '../../../styles/pages/home/sections/popular-courses/popular-courses.scss'

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
					<div className="col-6">Card_course</div>
					<div className="col-6"></div>
					<div className="col-6"></div>
					<div className="col-6"></div>
				</div>
			</div>
		</section>
	);
}

export default Popular_courses;