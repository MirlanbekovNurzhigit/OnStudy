import '../../styles/pages/singin/second/singin.scss'
import { Link } from 'react-router-dom';

function Singin() {
	return (
		<main className='singin__main'>
			<section className='singin'>
				<div className="form">
					<form action="">
						<Link to="/firstsingin"><img className="arrow" src="" alt="arrow" /></Link>
						<img className="logo" src="" alt="logo" />
						<h2 className="singin__title">Регистрация</h2>
						<div className="input__box">
							<div className="input__block">
								<input className="singin__inpot" type="text" placeholder="Имя" required />
							</div>
							<div className="input__block">
								<input className="singin__inpot" type="text" placeholder="Фамилия" required />
							</div>
							<div className="input__block">
								<input className="singin__inpot" type="password" placeholder="Пароль" required />
							</div>
							<div className="input__block">
								<input className="singin__inpot" type="password" placeholder='Повторите пароль' required />
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

export default Singin;