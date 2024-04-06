import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardCourse from '../../components/card-course';
import Course from '../../type/courses';
import '../../styles/pages/courses/courses.scss'

function Courses() {
	const [allCourses, setAllCourses] = useState<Course[]>([]);
	const [freeCourses, setFreeCourses] = useState<Course[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get<Course[]>('http://localhost:8000/courses');
				const courses = response.data;

				const freeCourses = courses.filter((course) => course.price === 'Free' || course.price === 'Бесплатно');
				const paidCourses = courses.filter((course) => course.price !== 'Free' && course.price !== 'Бесплатно');

				setAllCourses(paidCourses);
				setFreeCourses(freeCourses);
			} catch (error) {
				console.error('Ошибка при загрузке данных:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<main className="courses">
			<section className="all__courses">
				<div className="container">
					<h2 className="all__courses-title">Все курсы</h2>
					<div className="row">
						{allCourses.map((course) => (
							<CardCourse key={course.id} course={course} />
						))}
					</div>
				</div>
			</section>
			<section className="free__courses">
				<div className="container">
					<h2 className="free__courses-title">Бесплатные курсы</h2>
					<div className="row">
						{freeCourses.map((course) => (
							<CardCourse key={course.id} course={course} />
						))}
					</div>
				</div>
			</section>
		</main>
	);
}

export default Courses;
