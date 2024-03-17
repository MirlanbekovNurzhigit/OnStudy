import '../styles/components/header.scss'
import Logo from '../images/components/header/logo.svg'
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header className="header">
			<div className="container">
				<nav className="nav">
					<Link to="/">
						<div className="logo">
							<img src={Logo} alt="" />
							<h2>OnStudy</h2>
						</div>
					</Link>
					<ul className="menu">
						<li><Link to="/">Главная</Link></li>
						<li><Link to="/courses">Курсы</Link></li>
						<li><Link to="/about-OnStudy">О OnStudy</Link></li>
					</ul>
					<Link to="/login" className="header__button">Войти</Link>
				</nav>
			</div>
		</header>
	);
}

export default Header;