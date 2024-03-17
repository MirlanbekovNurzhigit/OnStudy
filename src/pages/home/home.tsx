import '../../styles/pages/home/home.scss'
import Hero from './sections/hero';
import About_us from './sections/about_us';
import Popelar_courses from './sections/popelar_courses';
import Mentors from './sections/mentors';
import Choice from './sections/choice';
import Statistics from './sections/statistics';

function Home() {
	return (
		<main className='home__main'>
			<Hero />
			<About_us />
			<Popelar_courses />
			<Mentors />
			<Choice />
			<Statistics />
		</main>
	);
}

export default Home;