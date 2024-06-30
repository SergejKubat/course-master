export default interface IReviewResponse {
    id: number;
    studentId: number;
    courseId: number;
    rating: number;
    comment: string;
    createdAt: string;
}
