import '../../styles/pages/profiel/profiel.scss'
import axios from 'axios';
// import Users_courses from '../courses/sections/users-courses';
import ContinueGreeting from './sections/continue&greeting';

const API_URL = 'http://localhost:8000/users';

function Profiel() {
	const handleLogout = async () => {
		try {
		  await axios.post(`${API_URL}`);
		  alert('Вы вышли из профиля!')
		  console.log('Выход');
		} catch (error) {
		  console.error('Ошибка выхода:', error);
		}
	  };

	return (
		<main>
			<ContinueGreeting />
			{/* <Users_courses /> */}
			<button onClick={handleLogout}>Выйти из аккаунта</button>
		</main>
	);
}

export default Profiel;
