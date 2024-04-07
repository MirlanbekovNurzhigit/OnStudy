import { useState, useEffect, SetStateAction } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import TypeCourse from '../../../type/courses';
import '../../../styles/pages/courses/course/page-course_media.css'
import '../../../styles/pages/courses/course/page-course.scss'


function PageCourse() {
	const [courseData, setCourseData] = useState<TypeCourse | null>(null);
	const { id } = useParams<{ id: string }>();
	const [selectedOption, setSelectedOption] = useState('');

	useEffect(() => {
		const fetchCourse = async () => {
			try {
				const response = await axios.get<TypeCourse[]>(`http://localhost:8000/courses`);
				const foundCourse = response.data.find(course => course.id === id);
				if (foundCourse) {
					setCourseData(foundCourse);
				} else {
					console.error(`Курс с идентификатором ${id} не найден.`);
				}
			} catch (error) {
				console.error('Ошибка при получении данных о курсе:', error);
			}
		};

		fetchCourse();
	}, [id]);

	const handleSelectChange = (event: { target: { value: SetStateAction<string>; }; }) => {
		setSelectedOption(event.target.value);
	};

	if (!courseData) {
		return <div className="loading">
			<h1 className="loading"></h1>
		</div>;
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
							{/* <iframe width="560" height="315" src={courseData.ctgrs.ctgr.videos.video.video} title={courseData.ctgrs.ctgr.videos.video.name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default PageCourse;
