import { useEffect } from 'react';
import '../styles/components/header/header.scss'
import '../styles/components/header/header_media.css'
import Logo from '../images/WhiteLogo.svg'
import { Link } from 'react-router-dom';

function Header() {
	useEffect(() => {
		const menu = document.querySelector('.menu__body');
		const menuBtn = document.querySelector('.menu__icon');
		const body = document.body;

		const toggleMenu = () => {
			if (menu && menuBtn) {
				menu.classList.toggle('active');
				menuBtn.classList.toggle('active');
				body.classList.toggle('lock');
			}
		};

		const closeMenu = (e: Event) => {
			if (menu && menuBtn && e.target instanceof HTMLElement && e.target.classList.contains('menu__body')) {
				menu.classList.remove('active');
				menuBtn.classList.remove('active');
				body.classList.remove('lock');
			}
		};

		if (menu && menuBtn) {
			menuBtn.addEventListener('click', toggleMenu);
			menu.addEventListener('click', closeMenu);
			menu.querySelectorAll('.menu__link').forEach(link => {
				link.addEventListener('click', toggleMenu);
			});
		}

		const anchors = document.querySelectorAll('a[href*="#"]');

		const scrollHandler = (event: Event) => {
			event.preventDefault();
			const anchor = event.target as HTMLElement;
			const blockID = anchor.getAttribute('href')?.substring(1);
			const targetBlock = document.getElementById(blockID || '');

			if (targetBlock) {
				targetBlock.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}
		};

		anchors.forEach(anchor => {
			anchor.addEventListener('click', scrollHandler);
		});

		return () => {
			if (menu && menuBtn) {
				menuBtn.removeEventListener('click', toggleMenu);
				menu.removeEventListener('click', closeMenu);
				menu.querySelectorAll('.menu__link').forEach(link => {
					link.removeEventListener('click', toggleMenu);
				});
			}
			anchors.forEach(anchor => {
				anchor.removeEventListener('click', scrollHandler);
			});
		};
	}, []);

	return (
		<header className="header">
			<div className="container-header">
				<nav className="nav">
					<Link to="/">
						<div className="logo">
							<img src={Logo} alt="logo" />
							<h2 className="name">OnStudy</h2>
						</div>
					</Link>
					<div className="menu__body">
						<ul className="menu__list">
							<li><Link to="/">Главная</Link></li>
							<li><Link to="/courses">Курсы</Link></li>
							<li><Link to="/about-OnStudy">О Нас</Link></li>
						</ul>
					</div>
					<div className="header__burger-btn">
						<Link to="/login" className="header__button">Войти</Link>
						<div className="menu__icon">
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
}

export default Header;