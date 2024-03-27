import '../../styles/pages/singin/first/firstsingin.scss'
import { Link } from 'react-router-dom';

function Firstsingin() {
	return (
		<main className='firstsingin__main'>
			<section className='firstsingin'>
				<div className="form">
					<form action="">
						<Link to="/login"><img className="arrow" src="" alt="arrow" /></Link>
						<img className="logo" src="" alt="logo" />
						<h2 className="firstsingin__title">Регистрация</h2>
						<div className="input__block">
							<input className="firstsingin__inpot" type="email" placeholder="Электронная почта" required />
						</div>
						<button className="firstsingin__button"><Link to="/singin">Далее</Link></button>
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

export default Firstsingin;