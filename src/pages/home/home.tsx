import '../../styles/pages/home/home.scss'
import Hero from '../../components/hero';
import About_us from './sections/about_us';
import Popular_courses from './sections/popular_courses';
import Mentors from './sections/mentors';
import Choice from './sections/choice';
import Statistics from './sections/statistics';
import TypeCourse from '../../type/courses';
import TypeMentors from '../../type/mentors';

interface StatisticsProps {
	coursesCount: number;
	coursesData: TypeCourse[];
	mentorsData: TypeMentors[];
	usersCount: number
}

function Home({ coursesCount, coursesData, mentorsData, usersCount }: StatisticsProps) {
	return (
		<main>
			<Hero />
			<About_us />
			<Statistics usersCount={usersCount} coursesCount={coursesCount} />
			<Popular_courses coursesData={coursesData} />
			<Choice />
			<Mentors mentorsData={mentorsData} />
			{/* edit mentors */}
		</main>
	);
}

export default Home;