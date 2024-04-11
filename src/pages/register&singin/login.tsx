import '../../styles/pages/register&login/login/login.scss'
import '../../styles/pages/register&login/login/login_media.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Logo from '../../images/BlackLogo.svg'
import { FormEvent, useState } from 'react';

const API_URL = 'http://localhost:8000/users';

function LogIn() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
  
	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	  setEmail(e.target.value);
	}
  
	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	  setPassword(e.target.value);
	} 

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		try {
		  await axios.post(`${API_URL}`, { email, password });
		  alert('Вход успешен!');
		console.log('Вход успешен:', { email, password });
		// Очистка полей после входа
		setEmail('');
		setPassword('');
		// return redirect("/courses");
		} catch (error) {
		  console.error('Ошибка входа:', error);
		}
	  };
	
	return (
		<main className='login__main'>
			<section className='login'>
				<div className="form">
					<form action="">
						<img className="logo" src={Logo} alt="logo" />
						<h2 className="login__title">Вход в профиль</h2>
						<div className="input__box">
							<div className="input__block">
								<input
									type="email"
									placeholder="Электронная почта"
									className="login__input"
									value={email}
									onChange={handleEmailChange}
									required
								/>
							</div>
							<div className="input__block">
								<input
									type="password"
									placeholder="Пароль"
									className="login__input"
									value={password}
        							onChange={handlePasswordChange}
									required
								/>
							</div>
						</div>
						{/* <a href="#" className="forgot">Не помню пароль</a> */}
						<button type="submit" className="login__button" onClick={handleSubmit}>Войти</button>
					</form>
					<button className="button"><Link to="/register">Создать профиль</Link></button>

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