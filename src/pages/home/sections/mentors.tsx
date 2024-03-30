import '../../../styles/pages/home/sections/mentors/mentors.scss'
import '../../../styles/pages/home/sections/mentors/mentors_media.css'
import Mentor_card from '../../../components/mentor-card';

function Mentors() {
	return (
		<section className="mentors">
			<div className="container">
				<div className="text__content">
					<h2 className="mentors__title">Наши менторы</h2>
					<p className="mentors__text">
						Получите руководство от увлеченных и опытных профессионалов.
					</p>
				</div>
				<div className="row">
					<Mentor_card />
					<Mentor_card />
					<Mentor_card />
				</div>
			</div>
		</section>
	);
}

export default Mentors;