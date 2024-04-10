import '../../styles/pages/register&login/login/login.scss'
import '../../styles/pages/register&login/login/login_media.css'
import { Link } from 'react-router-dom';
import Logo from '../../images/BlackLogo.svg'

function LogIn() {
	return (
		<main className='login__main'>
			<section className='login'>
				<div className="form">
					<form action="">
						<div className="logo__block">
							<img className="logo" src={Logo} alt="logo" />
							<h2 className="login__title">Вход в профиль</h2>
						</div>
						<div className="input__box">
							<div className="input__block">
								<input
									type="email"
									placeholder="Электронная почта"
									className="login__input"
									required
								/>
							</div>
							<div className="input__block">
								<input
									type="password"
									placeholder="Пароль"
									className="login__input"
									required
								/>
							</div>
						</div>
						{/* <a href="#" className="forgot">Не помню пароль</a> */}
						<button type="submit" className="login__button">Войти</button>
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