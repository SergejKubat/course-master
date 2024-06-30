export default interface IReviewRequest {
    id?: number;
    studentId: number;
    courseId: number;
    rating: number;
    comment: string;
}
