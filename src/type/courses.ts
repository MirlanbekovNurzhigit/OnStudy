interface TypeCourse {
	name: string;
	type: string;
	price: string;
	image: string;
	videocount: number;
	ctgrs: [
		{
			ctgrName: string,
			videos: [
				{
					name: string;
					videoImage: string;
					duration: number;
					UrlVideo: string;
				}
			]
		}
	],
	id: any
}

export default TypeCourse;