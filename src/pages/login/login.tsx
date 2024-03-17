import '../../styles/pages/login/login.scss'

function Login() {
	return (
		<main className='main'>
			<section className='login'>
				<div className="form">
					<form action="">
						<div className="logo">
							<img src="" alt="" />
						</div>
						<h2 className="login__title">Вход в профиль</h2>
						<div className="input__box">
							<input className="login__inpot" type="text" placeholder='"Электронная почта"' required />
						</div>
						<div className="input__box">
							<input className="login__inpot" type="password" placeholder='Пароль' required />
						</div>
						<div className="forgot">
							<a href="#">Не помню пароль</a>
						</div>
						<div className="buttons">
							<button className="button">Войти</button>
							<button className="button">Создать профиль</button>
						</div>
					</form>
				</div>
			</section>
		</main>
	);
}

export default Login;