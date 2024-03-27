import '../../../styles/pages/about_onstudy/sections/found/found.scss'
import Mentor_card from '../../../components/mentor-card';


function Founders() {
	return (
		<section className="founders">
			<div className="container">
				<h2 className="founders__title">Основатели платформы</h2>
				<div className="row">
					<Mentor_card />
					<Mentor_card />
					<Mentor_card />
				</div>
			</div>
		</section>
	);
}

export default Founders;