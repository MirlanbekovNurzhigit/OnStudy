import '../../../styles/pages/about_onstudy/sections/statictics/statictics.scss'

function Statistics() {
	return (
		<section className="statistics">
			<div className="container">
				<div className="box__flex">
					<p className="choise__text">
						Мы предлагаем большой выбор курсов для профессионального и личностного развития.
					</p>
					<div className="statistics__statistic">
						<img className="statistic__image" src="" alt="" />
						<div className="statistics__statistic-inside-box">
							<h4 className="statistic">10,000+ студентов</h4>
							<p className="information">Учиться и трудятся</p>
						</div>
					</div>
				</div>
				<div className="statictics">
					<div className="statistics__statistic">
						<img className="statistic__image" src="" alt="" />
						<div className="statistics__statistic-inside-box">
							<h4 className="statistic">10,000+ студентов</h4>
							<p className="information">Учиться и трудятся</p>
						</div>
					</div>
					<div className="statistics__statistic">
						<img className="statistic__image" src="" alt="" />
						<div className="statistics__statistic-inside-box">
							<h4 className="statistic">10,000+ студентов</h4>
							<p className="information">Учиться и трудятся</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Statistics;