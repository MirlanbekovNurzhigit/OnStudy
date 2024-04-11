import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home/home';
import AboutOnstudy from './pages/about_onstudy/about_onstudy';
import Courses from './pages/courses/courses';
import Login from './pages/register&singin/login';
import Register from './pages/register&singin/register';
import Singin from './pages/register&singin/singin';
import Profiel from './pages/profiel/profiel';
import PageCourse from './pages/courses/course/page-course';
import Admin from './admin/admin';
import './styles/main.scss';

// json-server --watch courses.json --port 8000
// json-server --watch users.json --port 8001

function App() {
	const location = useLocation();
	const hideHeaderFooter = ['/login', '/firstsingin', '/singin', '/adminkaasdsafdgfassd'].includes(location.pathname);
	const hideCircles = ['/courses', '/user', '/course/:name/:id'].includes(location.pathname);

	return (
		<div className="app__body">
			{!hideHeaderFooter && <Header />}

			{!hideCircles &&

				<div className="circles">
					<div className="bigger__big-circle"></div>
					<div className="big__circle"></div>
					<div className="bigger__small-circle"></div>
					<div className="small__circle"></div>
				</div>

			}

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/courses" element={<Courses />} />
				<Route path="/course/:name/:id" element={<PageCourse />} />
				<Route path="/about-OnStudy" element={<AboutOnstudy />} />
				<Route path="/adminkaasdsafdgfassd" element={<Admin />} />
				<Route path="/user" element={<Profiel />} />

				{/* will edit */}
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />

				{/* will edit */}
				<Route path="/singin" element={<Singin />} />
			</Routes>

			{!hideHeaderFooter && <Footer />}
		</div>
	);
}

export default App;