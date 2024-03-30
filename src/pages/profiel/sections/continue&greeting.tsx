import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import '../../../styles/pages/profiel/sections/continue&greeting.scss'

function ContinueGreeting() {
	return (
		<section className="continue__greeting">
			<div className="container">
				<div className="row">
					<div className="greeting">
						<h2 className="greeting__user">USER, привет!</h2>
						<p className="greeting__text">Сегодня прекрасный момент, чтобы расширить свои горизонты или применить знания на практике.</p>
					</div>

					<Swiper className="continue__watch"
						spaceBetween={120}
						slidesPerView={3.5}
					>
						<SwiperSlide>
							<div className="continue__watch-slide">
								{/* <img src="" alt="" className="continue__slide-img" /> */}
								<div className="continue__slide-img"></div>
								<p className="continue__slide-course-name">Как учится в OnStudy. <span className="continue__slide-course-name-description">Курс-знакомство</span></p>
								<h2 className="continue__slide-course-stage">1.1 Добро пожаловать</h2>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="continue__watch-slide">
								<img src="" alt="" className="continue__slide-img" />
								<p className="continue__slide-course-name">Как учится в OnStudy. <span className="continue__slide-course-name-description">Курс-знакомство</span></p>
								<h2 className="continue__slide-course-stage">1.1 Добро пожаловать</h2>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="continue__watch-slide">
								<img src="" alt="" className="continue__slide-img" />
								<p className="continue__slide-course-name">Как учится в OnStudy. <span className="continue__slide-course-name-description">Курс-знакомство</span></p>
								<h2 className="continue__slide-course-stage">1.1 Добро пожаловать</h2>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="continue__watch-slide">
								<img src="" alt="" className="continue__slide-img" />
								<p className="continue__slide-course-name">Как учится в OnStudy. <span className="continue__slide-course-name-description">Курс-знакомство</span></p>
								<h2 className="continue__slide-course-stage">1.1 Добро пожаловать</h2>
							</div>
						</SwiperSlide>

					</Swiper>
				</div>
			</div>
		</section>
	);
}

export default ContinueGreeting;