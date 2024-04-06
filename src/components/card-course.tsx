import React from 'react';
import Course from '../type/courses';
import '../styles/components/card-course/card-course.scss';

interface CardCourseProps {
	course: Course;
}

function CardCourse({ course }: CardCourseProps) {
	const { type, name, price, image } = course;

	const maxNameLength = 20;

	const limitedName = name.length > maxNameLength ?
		name.substring(0, maxNameLength) + '...' :
		name;

	return (
		<div className="course__card">
			<div className="box">
				<div className="course__box-card-left">
					<h6 className="course__text">{type}</h6>
					<h2 className="course__name">{limitedName}</h2>
					<p className="price">{`${price}`}</p>
				</div>
				<div className="course__box-card-right">
					<img src={image} alt="" />
				</div>
			</div>
		</div>
	);
}

export default CardCourse;
