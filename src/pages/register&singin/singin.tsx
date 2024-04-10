import '../../styles/pages/register&login/singin/singin.scss'
import '../../styles/pages/register&login/singin/singin_media.css'
import { Link } from 'react-router-dom';
import Logo from '../../images/BlackLogo.svg'
import Arrow from '../../images/arrow.svg'

function SingIn() {
	return (
		<main className='singin__main'>
			<section className='singin'>
				<div className="form">
					<form action="">
						<Link to="/firstsingin"><img className="arrow" src={Arrow} alt="arrow" /></Link>
						<div className="logo__block">
							<img className="logo" src={Logo} alt="logo" />
							<h2 className="singin__title">Регистрация</h2>
						</div>
						<div className="input__box">
							<div className="input__block">
								<input className="singin__input" type="text" placeholder="Имя" required />
							</div>
							<div className="input__block">
								<input className="singin__input" type="text" placeholder="Фамилия" required />
							</div>
							<div className="input__block">
								<input className="singin__input" type="password" placeholder="Пароль" required />
							</div>
							<div className="input__block">
								<input className="singin__input" type="password" placeholder='Повторите пароль' required />
							</div>
						</div>
						<button className="singin__button">Войти</button>
					</form>
					<p className="offer">Нажимая на кнопку, я принимаю оферу и соглашаюсь на обработку персональных данных</p>
					<p className="haveaccaunt">Уже есть аккаунт? <Link to="/login">Войдите</Link></p>
				</div>
			</section>
		</main>
	);
}

export default SingIn;