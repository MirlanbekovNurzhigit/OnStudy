import '../styles/components/mentor-course/mentor-course.scss'
import MentorPhoto from '../images/pages/mentor.jpeg'

function Mentor_card() {
	return (
		<div className="mentor__card">
			<img className="mentor__photo" src={MentorPhoto} alt="Mentor Photo" />
			<div className="mentor__card-box">
				<h2 className="mentor__name">Куратор эксперт</h2>
				<p className="mentor__description">Подробно разбирает домашние задания, помогает сделать лучше</p>
			</div>
		</div>
	);
}

export default Mentor_card;