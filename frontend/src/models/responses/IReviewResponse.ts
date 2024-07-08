interface IReviewStudentResponse {
    id: number;
    firstName: string;
    lastName: string;
    avatar: string;
}

export default interface IReviewResponse {
    id: number;
    student: IReviewStudentResponse;
    courseId: number;
    rating: number;
    comment: string;
    createdAt: string;
}
