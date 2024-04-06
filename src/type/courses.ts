interface TypeCourse {
	id: string;
	name: string;
	type: string;
	price: string;
	image: string;
	videocount: number;
	videos: {
		IntroductoryPart: {
			first: {
				name: string;
				videoImage: string;
				duration: number;
				video: string;
			}
			second: {
				name: string;
				videoImage: string;
				duration: number;
				video: string;
			}
			third: {
				name: string;
				videoImage: string;
				duration: number;
				video: string;
			}
		}
		Practice: {
			first: {
				name: string;
				videoImage: string;
				duration: number;
				video: string;
			}
			second: {
				name: string;
				videoImage: string;
				duration: number;
				video: string;
			}
			third: {
				name: string;
				videoImage: string;
				duration: number;
				video: string;
			}
		}
		Conclusion: {
			first: {
				name: string;
				videoImage: string;
				duration: number;
				video: string;
			}
			second: {
				name: string;
				videoImage: string;
				duration: number;
				video: string;
			}
			third: {
				name: string;
				videoImage: string;
				duration: number;
				video: string;
			}
		}
	}
}

export default TypeCourse;