import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home/home';
import About_onstudy from './pages/about_onstudy/about_onstudy';
import Courses from './pages/courses/courses';
import Login from './pages/register&singin/login';
import Register from './pages/register&singin/register';
import Singin from './pages/register&singin/singin';
import Profiel from './pages/profiel/profiel';
import PageCourse from './pages/courses/course/page-course';
import Admin from './admin/admin';
import axios from 'axios';
import './styles/main.scss';

// json-server --watch courses.json --port 8000
// json-server --watch users.json --port 8001

function App() {
	const location = useLocation();
	const hideHeaderFooter = ['/login', '/firstsingin', '/singin', '/adminkaasdsafdgfassd'].includes(location.pathname);
	const hideCircles = ['/courses', '/user', '/course/:name/:id'].includes(location.pathname);
	const [loading, setLoading] = useState(true);
	const [coursesData, setCoursesData] = useState([]);
	const [coursesCount, setCoursesCount] = useState(0);
	const [usersCount, setUsersCount] = useState(0);
	const [usersData, setUsersData] = useState([]);
	const [mentorsData, setMentorsData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const coursesResponse = await axios.get('http://localhost:8000/courses');
				setCoursesData(coursesResponse.data);
				setCoursesCount(coursesResponse.data.length);

				const mentorsResponse = await axios.get('http://localhost:8002/mentors');
				setMentorsData(mentorsResponse.data);

				const usersResponse = await axios.get('http://localhost:8001/users');
				setUsersData(usersResponse.data);
				setUsersCount(usersResponse.data.length);

				setLoading(false);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="app__body">
			{!hideHeaderFooter && <Header />}

			{!hideCircles && (
				<div className="circles">
					<div className="bigger__big-circle"></div>
					<div className="big__circle"></div>
					<div className="bigger__small-circle"></div>
					<div className="small__circle"></div>
				</div>
			)}
			<Routes>
				<Route path="/" element={<Home coursesCount={coursesCount} usersCount={usersCount} mentorsData={mentorsData} coursesData={coursesData} />} />
				<Route path="/courses" element={<Courses data={coursesData} />} />
				<Route path="/course/:name/:id" element={<PageCourse data={coursesData} />} />
				<Route path="/about-OnStudy" element={<About_onstudy usersCount={usersCount} coursesCount={coursesCount} />} />
				<Route path="/adminkaasdsafdgfassd" element={<Admin />} />
				<Route path="/user" element={<Profiel />} />

				{/* will edit */}
				<Route path="/login" element={<Login />} />
				<Route path="/firstsingin" element={<Register />} />

				{/* will edit */}
				<Route path="/singin" element={<Singin />} />
			</Routes>

			{!hideHeaderFooter && <Footer />}
		</div>
	);
}

export default App;
