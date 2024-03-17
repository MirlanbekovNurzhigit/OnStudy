import '../../../styles/pages/home/sections/choice.scss'

function Choice() {
	return (
		<section className="choice">
			<div className="container">
				<h2 className="choice__title">Почему стоит выбирать OnStudy?</h2>
				<div className="box__flex">
					<p className="choice__text">Разнообразие курсов: Наши предложения охватывают широкий спектр областей знаний, от экзаменов до специализированных предметов.</p>
					<p className="choice__text">Качество обучения: Мы предлагаем курсы, разработанные экспертами в своих областях, обеспечивая высокий уровень образования.</p>
				</div>
			</div>
		</section>
	);
}

export default Choice;