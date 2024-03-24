import '../../styles/pages/login/login.scss'
import { Link } from 'react-router-dom';

function Login() {
	return (
		<main className='login__main'>
			<section className='login'>
				<div className="form">
					<form action="">
						<div className="logo">
							<img src="" alt="" />
						</div>
						<h2 className="login__title">Вход в профиль</h2>
						<div className="input__box">
							<div className="input__block">
								<input className="login__inpot" type="email" placeholder="Электронная почта" required />
							</div>
							<div className="input__block">
								<input className="login__inpot" type="password" placeholder='Пароль' required />
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

export default Login;