import '../../styles/pages/register&login/register/register.scss'
import '../../styles/pages/register&login/register/register_media.css'
import { Link } from 'react-router-dom';
import Logo from '../../images/BlackLogo.svg'

function Register() {
	return (
		<main className='register__main'>
			<section className='register'>
				<div className="form">
					<form action="">
						<Link to="/login"><img className="arrow" src="" alt="arrow" /></Link>
						<img className="logo" src={Logo} alt="logo" />
						<h2 className="register__title">Регистрация</h2>
						<div className="input__block">
							<input className="register__input" type="email" placeholder="Электронная почта" required />
						</div>
						<button className="register__button"><Link to="/singin">Далее</Link></button>
					</form>
					<p className="offer">Нажимая на кнопку, я принимаю оферу и соглашаюсь на обработку персональных данных</p>

					<p className="singinby">Или</p>

					<div className="bysocial">
						<div className="social"></div>
						<div className="social"></div>
						<div className="social"></div>
						<div className="social"></div>
					</div>
					<p className="haveaccaunt">Уже есть аккаунт? <Link to="/login">Войдите</Link></p>

				</div>
			</section>
		</main>
	);
}

export default Register;