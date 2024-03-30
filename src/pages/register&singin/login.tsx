import '../../styles/pages/register&login/login/login.scss'
import '../../styles/pages/register&login/login/login_media.css'
import { Link } from 'react-router-dom';
import Logo from '../../images/components/header/logo.svg'

function LogIn() {
	return (
		<main className='login__main'>
			<section className='login'>
				<div className="form">
					<form action="">
						<img className="logo" src="" alt="logo" />
						<h2 className="login__title">Вход в профиль</h2>
						<div className="input__box">
							<div className="input__block">
								<input className="login__input" type="email" placeholder="Электронная почта" required />
							</div>
							<div className="input__block">
								<input className="login__input" type="password" placeholder='Пароль' required />
							</div>
						</div>
						<a href="#" className="forgot">Не помню пароль</a>
						<button className="login__button">Войти</button>
					</form>
					<button className="button"><Link to="/firstsingin">Создать профиль</Link></button>

					<p className="loginby">Войти с помощью</p>

					<div className="bysocial">
						<div className="social"></div>
						<div className="social"></div>
						<div className="social"></div>
						<div className="social"></div>
					</div>

				</div>
			</section>
		</main>
	);
}

export default LogIn;