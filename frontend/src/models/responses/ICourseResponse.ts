interface ICourseCategoryResponse {
    id: number;
    name: string;
}

interface ICourseMentorResponse {
    id: number;
    firstName: string;
    lastName: string;
    avatar: string;
}

export default interface ICourseResponse {
    id: number;
    category: ICourseCategoryResponse;
    mentor: ICourseMentorResponse;
    title: string;
    description: string;
    thumbnailUrl: string;
    videoUrl: string;
    price: number;
    averageRating: number;
    studentsCount: number;
    createdAt: string;
    updatedAt: string;
}
