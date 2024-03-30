import '../../styles/pages/profiel/profiel.scss'
import Users_courses from '../courses/sections/users-courses';
import ContinueGreeting from './sections/continue&greeting';

function Profiel() {
	return (
		<main>
			<ContinueGreeting />
			<Users_courses />
		</main>
	);
}

export default Profiel;
