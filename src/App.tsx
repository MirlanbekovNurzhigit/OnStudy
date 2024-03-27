import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home/home';
import About_onstudy from './pages/about_onstudy/about_onstudy';
import Courses from './pages/courses/courses';
import Login from './pages/login/login';
import Singin from './pages/singin/singin';
import Firstsingin from './pages/singin/firstsingin';
import './styles/main.scss';

function App() {
	const location = useLocation();
	const hideHeaderFooter = ['/login', '/firstsingin', '/singin'].includes(location.pathname);

	return (
		<div className='app-main'>
			{!hideHeaderFooter && <Header />}

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about-OnStudy" element={<About_onstudy />} />
				<Route path="/courses" element={<Courses />} />
				<Route path="/login" element={<Login />} />
				<Route path="/firstsingin" element={<Firstsingin />} />
				<Route path="/singin" element={<Singin />} />
			</Routes>

			{!hideHeaderFooter && <Footer />}
		</div>
	);
}

export default App;
