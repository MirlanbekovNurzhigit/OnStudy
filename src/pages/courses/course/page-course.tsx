import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import TypeCourse from '../../../type/courses';
import '../../../styles/pages/courses/course/page-course_media.css'
import '../../../styles/pages/courses/course/page-course.scss'

function PageCourse() {
	const [courseData, setCourseData] = useState<TypeCourse | null>(null);
	const { id } = useParams<{ id: string }>();

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

	if (!courseData) {
		return <div>Загрузка данных...</div>;
	}

	return (
		<main>
			<section>
				<div className="container">
					<h2>{courseData.name}</h2>
					<p>Type: {courseData.type}</p>
					<p>Price: {courseData.price}</p>
					{/* Здесь можно добавить другие элементы для отображения данных о курсе */}
				</div>
			</section>
		</main>
	);
}

export default PageCourse;
