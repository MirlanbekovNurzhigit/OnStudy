import '../styles/components/card-course/card-course.scss'

function Card_course() {
	return (
		<div className="course__card">
			<div className="box">
				<div className="course__box-card-left">
					<h6 className="course__text">Курс</h6>
					<h2 className="course__name">Введение в lorem...</h2>
					<p className="price">$1000</p>
				</div>
				<div className="course__box-card-right">
					<img src={' lol '} alt="" />
				</div>
			</div>
		</div>
	);
}

export default Card_course;