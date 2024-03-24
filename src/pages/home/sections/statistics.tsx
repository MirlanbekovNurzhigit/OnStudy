import '../../../styles/pages/home/sections/statistics/statistics.scss'

function Statistics() {
	return (
		<section className="statistics">
			<div className="container">
				<div className="statistics__box">
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
							<h4 className="statistic">500+ курсов</h4>
							<p className="information">В различных областях</p>
						</div>
					</div>
					<div className="statistics__statistic">
						<img className="statistic__image" src="" alt="" />
						<div className="statistics__statistic-inside-box">
							<h4 className="statistic">99% удовлетворение</h4>
							<p className="information">Мы делаем обучение интересным!</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Statistics;