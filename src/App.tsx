import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home/home';
import About_onstudy from './pages/about_onstudy/about_onstudy';
import Courses from './pages/courses/courses';
import { Routes, Route } from 'react-router-dom'
import Login from './pages/login/login';
import Singin from './pages/singin/singin';
import Firstsingin from './pages/singin/firstsingin';
import './styles/main.scss'

function App() {
	return (
		<div className='app-main'>
			<Header />

			{/* <div className="circles">
				<div className="small__circle"></div>
				<div className="bigger__small-circle"></div>
				<div className="big__circle"></div>
				<div className="bigger__big-circle"></div>
			</div> */}

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about-OnStudy" element={<About_onstudy />} />
				<Route path="/courses" element={<Courses />} />
				<Route path="/login" element={<Login />} />
				<Route path="/firstsingin" element={<Firstsingin />} />
				<Route path="/singin" element={<Singin />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;
