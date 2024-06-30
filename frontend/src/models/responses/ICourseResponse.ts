export default interface ICourseResponse {
    id: number;
    mentorId: number;
    title: string;
    description: string;
    thumbnailUrl: string;
    videoUrl: string;
    price: number;
    averageRating: number;
    createdAt: string;
    updatedAt: string;
}
