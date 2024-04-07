import '../../styles/pages/home/home.scss'
import Hero from '../../components/hero';
import About_us from './sections/about_us';
import Popular_courses from './sections/popular_courses';
import Mentors from './sections/mentors';
import Choice from './sections/choice';
import Statistics from './sections/statistics';

function Home() {
	return (
		<main>
			<Hero />
			<About_us />
			<Statistics />
			<Popular_courses />
			<Choice />
			{/* edit mentors */}
			{/* <Mentors /> */}
		</main>
	);
}

export default Home;