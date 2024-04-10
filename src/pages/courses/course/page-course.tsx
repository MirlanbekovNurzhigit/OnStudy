import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import gsap from 'gsap';
import TypeCourse from '../../../type/courses';
import '../../../styles/pages/courses/course/page-course_media.scss'
import '../../../styles/pages/courses/course/page-course.scss';
import arrowDown from '../../../images/arrowdown.svg'

interface PageCourseProps {
	data: TypeCourse[];
}

function PageCourse({ data }: PageCourseProps) {
	const [courseData, setCourseData] = useState<TypeCourse | null>(null);
	const { id } = useParams<{ id: string }>();
	const [activeCategory, setActiveCategory] = useState<string | null>(null);
	const [categoryVideosVisibility, setCategoryVideosVisibility] = useState<{ [key: string]: boolean }>({});
	const videosRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const foundCourse = data.find(course => course.id === id);
		if (foundCourse) {
			setCourseData(foundCourse);
		} else {
			console.error(`Курс с идентификатором ${id} не найден.`);
		}
	}, [id, data]);

	useEffect(() => {

		if (activeCategory) {
			gsap.to(videosRef.current, { height: '100%', duration: 0.5 });
		} else {
			gsap.to(videosRef.current, { height: 0, duration: 0.5 });
		}
	}, [activeCategory]);

	const handleCategoryClick = (categoryName: string) => {
		if (activeCategory === categoryName) {
			setActiveCategory(null);
			setCategoryVideosVisibility(prevState => ({ ...prevState, [categoryName]: false }));
		} else {
			setActiveCategory(categoryName);
			setCategoryVideosVisibility(prevState => ({ ...prevState, [categoryName]: true }));
		}
	};

	if (!courseData) {
		return (
			<div className="loading">
				<h1>Loading...</h1>
			</div>
		);
	}

	return (
		<main className="page__course">
			<section className="page__course-main">
				<div className="container">
					<div className="row">
						<div className="page__course-main-left">
							<div className="page__course-main-left-card">
								<div className="page__course-main-left-card-box">
									<div className="page__course-main-left-card-left">
										<h2 className="page__course-main-left-card-name">{courseData.name}</h2>
										<p className="page__course-main-left-card-video-count">{`${courseData.videocount} Видео`}</p>
									</div>
									<div className="page__course-main-left-card-right">
										<img src={courseData.image} alt="" />
									</div>
								</div>
							</div>
						</div>

						<div className="page__course-main-right">
							<div className="category-list">
								{courseData.ctgrs.map((category, index) => (
									<div key={index} className="category-item">

										<div className="page__course-main-right-button" onClick={() => handleCategoryClick(category.ctgrName)}>
											<div className="line"></div>
											<div className="page__course-main-right-button-box">
												<h2 className="category__name">{`${index + 1}. ${category.ctgrName}`}</h2>
												<div className="arrow__down">
													<img src={arrowDown} alt="arrow" />
												</div>
											</div>
										</div>

										<div className="videos__row" style={{ height: categoryVideosVisibility[category.ctgrName] ? 'auto' : '0', overflow: 'hidden' }}>
											{category.videos.map((video, vIndex) => (
												<div className="video">
													<iframe
														className="video__on-youtube"
														key={vIndex}
														src={video.UrlVideo}
														title={video.name}
														width="560"
														height="315"
														allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
														allowFullScreen
													></iframe>
													<h4 className='video__name'>{`${index + 1}.${vIndex + 1} ${video.name}`}</h4>
												</div>
											))}
										</div>

									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default PageCourse;
